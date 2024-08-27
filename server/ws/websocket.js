const WebSocket = require('ws');
const Game = require('../models/Game');

const setupWebSocket = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', async (message) => {
            const { event, ...data } = JSON.parse(message);

            switch (event) {
                case 'game_init':
                    const game = await Game.findById(data.gameId);
                    ws.send(JSON.stringify({ event: 'game_init', state: game.board }));
                    break;

                case 'player_move':
                    const updatedGame = await handlePlayerMove(data);
                    broadcastState(wss, updatedGame);
                    break;

                default:
                    break;
            }
        });
    });

    const broadcastState = (wss, game) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ event: 'state_update', state: game.board, turn: game.currentTurn }));
            }
        });
    };

    const handlePlayerMove = async (data) => {
        const { gameId, from, to } = data;
        const game = await Game.findById(gameId);
        const character = game.board[from.row][from.col];

        if (character.isValidMove(to, game.board)) {
            game.board[to.row][to.col] = character;
            game.board[from.row][from.col] = null;
            game.currentTurn = (game.currentTurn + 1) % 2;
            await game.save();
        } else {
            throw new Error('Invalid move');
        }

        return game;
    };
};

module.exports = setupWebSocket;
