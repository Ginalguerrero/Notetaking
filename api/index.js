const express = require("express");
const router = express.Router();
const { v4: uuid } = require('uuid');
const fs = require("fs");
const db = require('../Develop/db/db.json')

router.get("/notes", (req, res) => res.json(db));
router.post('/notes', (req, res) => {
    const notes = req.body;
    if (notes.text && notes.title) {
        res.sendStatus(422);
    }
    notes.id = uuid();
    db.push(notes);
    fs.writeFileSync('../Develop/db/db.json', JSON.stringify(db, null, 2))
    res.sendStatus(201)
})
module.exports = router