require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Contact = require("./models/contact");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
morgan.token("requestBody", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :requestBody"
  )
);
app.use(cors());
app.use(express.static("build"));

app.get("/info", (request, response) => {
  Contact.find({}).then((result) => {
    const time = new Date();
    const responseString = `
      Phonebook has info for ${result.length} people 
      ${time.toString()}
    `;
    response.send(responseString);
  });
});

// fetch all contacts from DB
app.get("/api/persons", (request, response) => {
  Contact.find({}).then((result) => {
    response.json(result);
  });
});

// add a contact to DB (including duplicates)
app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const contact = new Contact({ ...body });
  contact.save().then((savedContact) => {
    response.json(savedContact);
  });
  // IMPLEMENT LATER - check whether contact exists
  // if (phonebook.filter((contact) => contact.name === body.name).length > 0) {
  //   return response.status(400).json({
  //     error: "name already in the phonebook",
  //   });
  // }
});

// fetch a contact by ID from DB
app.get("/api/persons/:id", (request, response) => {
  Contact.findById(request.params.id).then((contact) => {
    response.json(contact);
  });
});

// delete a contact from DB
app.delete("/api/persons/:id", (request, response) => {
  Contact.deleteOne({ _id: Object(request.params.id) }).then((result) => {
    console.log(result);
    response.status(204).end();
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
