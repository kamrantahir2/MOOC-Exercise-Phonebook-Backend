const express = require("express");
const app = express();

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>HELLO WORLD!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.send(JSON.stringify(persons, false, "<br />"));
});

app.get("/api/info", (request, response) => {
  const total = persons.length;
  const date = Date().toLocaleString();
  response.send(`Phonebook has info for ${total} people <br /> ${date}`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
