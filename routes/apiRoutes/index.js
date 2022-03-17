const router = require('express').Router();
const { createNewNote, validateNote, deleteNote } = require('../../lib/notes');
const { notesArray } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

// Route to get notes
router.get('/notes', (req, res) => {
    res.json(notesArray);
});

// Route to post notes
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuidv4();

    const note = createNewNote(req.body, notesArray);
    res.json(note);

});

// Route to delete notes
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notesArray);
    res.json(result);
});

module.exports = router;