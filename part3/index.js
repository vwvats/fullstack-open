const express = require("express");
const phonebook = require("./data.js");

const app = express();
const PORT = 3001;

app.get("/api/persons", (request, response) => {
  response.json(phonebook);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
