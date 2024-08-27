import React from 'react';

const GameOverScreen = ({ winner, onReset }) => {
  return (
    <div className="game-over-screen">
      <h2>Game Over</h2>
      <p>{winner} wins!</p>
      <button onClick={onReset}>Start New Game</button>
    </div>
  );
};

export default GameOverScreen;
