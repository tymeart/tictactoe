import React from 'react';
import '../Square.css';

const Square = ({ position, marker, handleSquareClick }) => {
  return (
    <div 
      className="Square"
      data-position={position}
      onClick={handleSquareClick}
    >
      { marker }
    </div>
  );
}

export default Square;