const Game = require('../models/Game');
const { Character, Pawn, Hero1, Hero2 } = require('../models/Character');

exports.createGame = async (req, res) => {
    try {
        const game = new Game({ players: req.body.players });
        await game.save();
        res.status(201).json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getGameState = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        res.json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.makeMove = async (req, res) => {
    try {
        const { gameId, playerId, from, to } = req.body;
        const game = await Game.findById(gameId);

        if (game.gameOver) {
            return res.status(400).json({ error: 'Game is already over' });
        }

        // Find the character at the "from" position
        const character = game.board[from.row][from.col];
        if (!character) {
            return res.status(400).json({ error: 'No character at the specified position' });
        }

        // Validate move
        if (!character.isValidMove(to, game.board)) {
            return res.status(400).json({ error: 'Invalid move' });
        }

        // Make the move
        game.board[to.row][to.col] = character;
        game.board[from.row][from.col] = null;

        // Update game state
        game.currentTurn = (game.currentTurn + 1) % 2;

        // Check for win condition
        if (checkWinCondition(game)) {
            game.gameOver = true;
            game.winner = playerId;
        }

        await game.save();
        res.json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const checkWinCondition = (game) => {
    // Custom logic to check if the game has been won
    return false; // Return true if a win condition is met
};
