const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Pawn', 'Hero1', 'Hero2'],
    },
    position: {
        row: { type: Number, required: true },
        col: { type: Number, required: true },
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    },
});

CharacterSchema.methods.isValidMove = function(newPosition, board) {
    // Basic validation logic
    // This can be more complex depending on game rules
    return (newPosition.row >= 0 && newPosition.row < 5 &&
            newPosition.col >= 0 && newPosition.col < 5);
};

// Subclass for Pawn
const PawnSchema = CharacterSchema.clone();
PawnSchema.methods.isValidMove = function(newPosition, board) {
    // Custom move logic for Pawn
    return this.position.row + 1 === newPosition.row && this.position.col === newPosition.col;
};

// Subclass for Hero1
const Hero1Schema = CharacterSchema.clone();
Hero1Schema.methods.isValidMove = function(newPosition, board) {
    // Custom move logic for Hero1
    return Math.abs(this.position.row - newPosition.row) <= 1 &&
           Math.abs(this.position.col - newPosition.col) <= 1;
};

// Subclass for Hero2
const Hero2Schema = CharacterSchema.clone();
Hero2Schema.methods.isValidMove = function(newPosition, board) {
    // Custom move logic for Hero2
    return true; // Allow any move as an example
};

module.exports = {
    Character: mongoose.model('Character', CharacterSchema),
    Pawn: mongoose.model('Pawn', PawnSchema),
    Hero1: mongoose.model('Hero1', Hero1Schema),
    Hero2: mongoose.model('Hero2', Hero2Schema),
};
