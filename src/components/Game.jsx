import React, { Component } from 'react';
import Modal from './Modal';
import Board from './Board';
import Turns from './Turns';
import '../Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atStart: true,
      playerTurn: 'human',
      humanMarker: null,
      compMarker: null
    };
  }
  
  handleOptionClick = (e) => {
    const compMarker = e.target.innerHTML === 'X' ? 'O' : 'X';

    this.setState({
      atStart: false,
      humanMarker: e.target.innerHTML,
      compMarker: compMarker
    });
  }

  changeTurns = () => {
    if (this.state.playerTurn === 'human') {
      this.setState({ playerTurn: 'computer' });
    } else {
      this.setState({ playerTurn: 'human' });
    }
  }

  render() {
    return (
      <div className="Game">
        <h1>Tic Tac Toe</h1>
        <main>
          {this.state.atStart && 
            <Modal 
              type="chooseOption" 
              handleOptionClick={this.handleOptionClick} 
            /> 
          }

          <Board 
            playerTurn={this.state.playerTurn}
            humanMarker={this.state.humanMarker}
            compMarker={this.state.compMarker}
            changeTurns={this.changeTurns}
          />
          <Turns 
            playerTurn={this.state.playerTurn}
            humanMarker={this.state.humanMarker}
            compMarker={this.state.compMarker}
          />
        </main>
      </div>
    );
  }
}

export default Game;
