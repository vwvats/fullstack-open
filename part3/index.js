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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
