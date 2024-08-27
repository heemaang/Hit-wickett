import React from 'react';

const MoveHistory = ({ moveHistory }) => {
  return (
    <div className="move-history">
      <h3>Move History</h3>
      <ul>
        {moveHistory.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoveHistory;
