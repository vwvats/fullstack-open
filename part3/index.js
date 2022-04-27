const express = require("express");
const phonebook = require("./data.js");

const app = express();
const PORT = 3001;

app.use(express.json());

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

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  if (phonebook.filter(contact => contact.name === body.name).length > 0) {
    return response.status(400).json({
      error: "name already in the phonebook",
    });
  }
  const contact = { ...body, id: Math.random() * Math.random() };
  phonebook = phonebook.concat(contact);
  response.json(contact);
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
