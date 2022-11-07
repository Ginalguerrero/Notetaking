const express = require("express");
const router = express.Router();
const { v4: uuid } = require('uuid');
router.get("/notes", (req, res) => {
    fs.readFile(`Develop/db/db.json`, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(JSON.parse(data));
    });
})
router.post('/notes', (req, res) => {
    const notes = req.body; 
    console.log(notes)
//    const data = JSON.parse(fs.readFileSync('Develop/db/db.json'));
   // notes.id = uuid();
  //  fs.writeFileSync('Develop/db/db.json', JSON.stringify(notes))
  res.sendStatus(201)
})
module.exports = router