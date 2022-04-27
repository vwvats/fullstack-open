const express = require("express");
const phonebook = require("./data.js");

const app = express();
const PORT = 3001;

app.get("/info", (request, response) => {
  const numberOfPeople = phonebook.length;
  const time = new Date();
  const responseString = `
    Phonebook has info for ${numberOfPeople} people 
    ${time.toString()}
  `;
  response.send(responseString);
});

app.get("/api/persons", (request, response) => {
  response.json(phonebook);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = phonebook.find((contact) => contact.id === id);
  if (contact) {
    response.json(contact);
  } else {
    response.send(`The id ${id} did not match any contact.`);
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  phonebook = phonebook.filter((note) => note.id !== id);
  response.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
