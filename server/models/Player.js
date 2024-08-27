const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    character: {
        type: String,
        required: true, // Character type, e.g., 'Pawn', 'Hero1', 'Hero2'
    },
    position: {
        type: { row: Number, col: Number },
        required: true,
    },
});

module.exports = mongoose.model('Player', PlayerSchema);
