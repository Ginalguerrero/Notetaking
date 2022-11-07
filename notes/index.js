const path = require("path");
const express = require("express");
const router = express.Router();
const basePath = path.join(__dirname, "../public");
//router.use(express.static("public"));

router.get("/", (req, res) => {
    res.sendFile(`${basePath}/notes.html`);
})
module.exports = router