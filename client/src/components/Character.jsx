import React, { useState } from 'react';

const Character = ({ character, onMove }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleMove = (move) => {
    onMove(character.name, move);
    setSelected(false);
  };

  const renderMoveOptions = () => {
    if (selected) {
      const moves = character.type === 'Pawn'
        ? ['L', 'R', 'F', 'B']
        : character.type === 'Hero1'
          ? ['L', 'R', 'F', 'B']
          : ['FL', 'FR', 'BL', 'BR'];

      return (
        <div className="move-options">
          {moves.map(move => (
            <button key={move} onClick={() => handleMove(move)}>
              {move}
            </button>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="character">
      <div className={`character-piece ${character.type}`} onClick={handleClick}>
        {character.name}
      </div>
      {renderMoveOptions()}
    </div>
  );
};

export default Character;
