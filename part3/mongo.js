// helper file to add and fetch data from DB
const mongoose = require("mongoose");

// prompt for password if not entered
if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

// grab password from arg and connect to DB
const password = process.argv[2];
const url = `mongodb+srv://vwvats-phonebook:${password}@cluster0.008dd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url);

// schema
const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

// model
const Contact = mongoose.model("Contact", contactSchema);

// fetch and log all contacts if only password is entered
if (process.argv.length === 3) {
  Contact.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((contact) => {
      console.log(`${contact.name} ${contact.number}`);
    });
    mongoose.connection.close();
  });
}

// add a contact to DB if args > 4
if (process.argv.length > 4) {
  const contact = new Contact({
    name: process.argv[3],
    number: process.argv[4],
  });

  contact.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
}
