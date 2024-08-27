const express = require('express');
const { createGame, getGameState, makeMove } = require('../controllers/gameController');
const router = express.Router();

router.post('/create', createGame);
router.get('/:id', getGameState);
router.post('/move', makeMove);

module.exports = router;
