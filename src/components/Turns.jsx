import React from 'react';
import '../Turns.css';

const Turns = ({ yourTurn, compTurn, yourMarker, compMarker }) => {
  return (
    <div className="Turns">
      { yourTurn && <div>Your turn ({yourMarker})</div> }
      { compTurn && <div>Computer's turn ({compMarker})</div> }
    </div>
  );
}

export default Turns;