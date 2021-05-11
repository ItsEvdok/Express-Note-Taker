const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {

});

app.post("/api/notes", (req, res) => {
    const note = req.body;

    console.log(note);

    activeNote.push(note);
    res.json(note);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});