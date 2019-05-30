import React, { Component } from 'react';
import Board from './Board';
import '../Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

export default Game;
