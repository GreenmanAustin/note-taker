const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
        return false;
    }
    if (!note.text || typeof note.species !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(id, notesArray) {
    for (i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === id) {
            var result = i;
        }
    }
    notesArray.splice(result, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
};

module.exports = {
    createNewNote,
    validateNote,
    deleteNote
};