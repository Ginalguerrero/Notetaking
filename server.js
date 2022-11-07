const path = require("path");
const express = require("express");
const notes = require("./notes");

const app = express();
const port = 3000;
const basePath = path.join(__dirname, "Develop/public");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/notes", notes);
app.use((req, res, next) => res.sendFile(`${basePath}/index.html`));
app.listen(port, () => console.log(`Server running: ${port}...`));