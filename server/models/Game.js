const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    board: {
        type: [[String]],
        default: Array(5).fill(null).map(() => Array(5).fill(null)),
    },
    currentTurn: {
        type: Number,
        default: 0, // 0 for Player 1, 1 for Player 2
    },
    players: {
        type: [String], // player IDs
        required: true,
    },
    gameOver: {
        type: Boolean,
        default: false,
    },
    winner: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('Game', GameSchema);
