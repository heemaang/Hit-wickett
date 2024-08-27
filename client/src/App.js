import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import MoveHistory from './components/MoveHistory';
import GameOverScreen from './components/GameOverScreen';
import { connectToWebSocket } from './websocket';

const App = () => {
  const [gameState, setGameState] = useState({});
  const [moveHistory, setMoveHistory] = useState([]);
  const [currentTurn, setCurrentTurn] = useState('A');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const ws = connectToWebSocket({
      onMessage: (message) => {
        const data = JSON.parse(message.data);
        switch (data.type) {
          case 'state_update':
            setGameState(data.state);
            setMoveHistory(data.moveHistory || []);
            setCurrentTurn(data.currentTurn);
            break;
          case 'invalid_move':
            alert('Invalid move. Please try again.');
            break;
          case 'game_over':
            setGameOver(true);
            setWinner(data.winner);
            break;
          default:
            break;
        }
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  const handleMove = (character, move) => {
    const ws = connectToWebSocket();
    ws.send(JSON.stringify({ type: 'player_move', character, move }));
  };

  const resetGame = () => {
    setGameOver(false);
    setWinner('');
    // Optionally reset other state variables if necessary
  };

  return (
    <div className="app">
      <h1>Turn-Based Chess Game</h1>
      {gameOver ? (
        <GameOverScreen winner={winner} onReset={resetGame} />
      ) : (
        <>
          <h2>Current Turn: {currentTurn}</h2>
          <GameBoard gameState={gameState} onMove={handleMove} />
          <MoveHistory moveHistory={moveHistory} />
        </>
      )}
    </div>
  );
};

export default App;
