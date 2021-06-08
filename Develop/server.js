const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const noteData = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  return res.json(noteData);
});

app.post("/api/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
  };

  noteData.push(newNote);

  return res.json(newNote);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});