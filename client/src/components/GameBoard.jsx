import React, { useState, useEffect } from 'react';
import '../styles/Gameboard.css';

const GameBoard = ({ board }) => {
    const [currentBoard, setCurrentBoard] = useState([]);

    useEffect(() => {
        // Initialize the board if it's not provided or is empty
        if (!board || board.length === 0) {
            const initialBoard = Array(5).fill(null).map(() => Array(5).fill(null));
            setCurrentBoard(initialBoard);
        } else {
            setCurrentBoard(board);
        }
    }, [board]);

    const renderCell = (row, col) => {
        // Defensive check to prevent accessing undefined properties
        if (!currentBoard[row] || currentBoard[row][col] === undefined) {
            return <button className="cell"></button>;
        }
        return (
            <button className="cell" onClick={() => handleMove(row, col)}>
                {currentBoard[row][col]}
            </button>
        );
    };

    const handleMove = (row, col) => {
        // Handle the move logic (this function would send the move to the server)
        console.log(`Move at row ${row}, col ${col}`);
    };

    // If the board is still initializing, show a loading state
    if (!currentBoard || currentBoard.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="board">
            {currentBoard.map((row, rowIndex) => (
                <div key={rowIndex} className="board-row">
                    {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
