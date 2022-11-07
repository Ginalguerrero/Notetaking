const path = require("path");
const express = require("express");
const notes = require("./notes");
const api = require("./api");
const app = express();
require('dotenv').config()
const port = process.env.PORT||3000;
const basePath = path.join(__dirname, "public");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);

app.use("/notes", notes);
app.use((req, res, next) => res.sendFile(`${basePath}/index.html`));
app.listen(port, () => console.log(`Server running: ${port}...`));