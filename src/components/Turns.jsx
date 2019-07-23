import React from 'react';
import '../Turns.css';

const Turns = ({ playerTurn, humanMarker, compMarker }) => {
  return (
    <div className="Turns">
      { playerTurn === 'human' ? 'Your turn' : 'Computer\'s turn' }
    </div>
  );
}

export default Turns;