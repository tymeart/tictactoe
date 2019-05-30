import React, { Component } from 'react';
import Board from './Board';
import Turns from './Turns';
import '../Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <h1>Tic Tac Toe</h1>
        <main>
          <Board />
          <Turns />
        </main>
      </div>
    );
  }
}

export default Game;
