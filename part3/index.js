require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("./utils/logger");
const errorHandler = require("./utils/errorHandler");
const Contact = require("./models/contact");

const app = express();
const PORT = process.env.PORT;

app.use(express.static("build"));
app.use(express.json());
app.use(cors());
app.use(logger);

app.get("/info", (request, response, next) => {
  Contact.find({})
    .then((result) => {
      const time = new Date();
      const responseString = `
      Phonebook has info for ${result.length} people 
      ${time.toString()}
    `;
      response.send(responseString);
    })
    .catch((error) => next(error));
});

// fetch all contacts from DB
app.get("/api/persons", (request, response, next) => {
  Contact.find({})
    .then((result) => {
      response.json(result);
    })
    .catch((error) => next(error));
});

// add a contact to DB
app.post("/api/persons", (request, response, next) => {
  const body = request.body;
  const contact = new Contact({ ...body });
  contact
    .save()
    .then((savedContact) => {
      response.json(savedContact);
    })
    .catch((error) => next(error));
});

// fetch a specific contact from DB
app.get("/api/persons/:id", (request, response, next) => {
  Contact.findById(request.params.id)
    .then((contact) => {
      if (contact) {
        response.json(contact);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// update a specific contact in DB
app.put("/api/persons/:id", (request, response, next) => {
  const { name, number } = request.body;
  Contact.findByIdAndUpdate(
    request.params.id,
    { name, number },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updated) => {
      response.json(updated);
    })
    .catch((error) => next(error));
});

// delete a spcific contact from DB
app.delete("/api/persons/:id", (request, response, next) => {
  Contact.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
