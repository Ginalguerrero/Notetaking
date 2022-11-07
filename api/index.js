const express = require("express");
const router = express.Router();
const { uuid } = require('uuidv4');
router.get("/notes", (req, res) => {
    fs.readFile(`Develop/db/db.json`, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(JSON.parse(data));
    });
})

module.exports = router