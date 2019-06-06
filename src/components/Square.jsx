import React from 'react';
import '../Square.css';

const Square = ({ row, col, marker, handleSquareClick }) => {
  return (
    <div 
      className="Square"
      data-row={row}
      data-col={col}
      onClick={handleSquareClick}
    >
      { marker }
    </div>
  );
}

export default Square;