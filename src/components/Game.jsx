import React, { Component } from 'react';
import Modal from './Modal';
import Board from './Board';
import Turns from './Turns';
import '../Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atGameStart: true,
      winner: null,
      playerTurn: 'human',
      humanMarker: null,
      compMarker: null
    };
  }
  
  handleOptionClick = (e) => {
    const compMarker = e.target.innerHTML === 'X' ? 'O' : 'X';

    this.setState({
      atGameStart: false,
      humanMarker: e.target.innerHTML,
      compMarker: compMarker
    });
  }

  handleRestartClick = () => {
    this.setState({
      atGameStart: true,
      winner: null,
      playerTurn: 'human',
      humanMarker: null,
      compMarker: null
    });
  }

  getEndState = (player) => {
    switch (player) {
      case 'human':
        this.setState({ winner: 'human' });
        break;
      case 'computer':
        this.setState({ winner: 'computer' });
        break;
      case 'tie':
        this.setState({ winner: 'tie' });
        break;
      default: 
        console.log('No game over?');
        break;
    }
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
          {this.state.atGameStart && 
            <Modal 
              type="chooseOption" 
              handleOptionClick={this.handleOptionClick} 
            /> 
          }

          {this.state.winner && 
            <Modal 
              type="gameOver" 
              winner={this.state.winner}
              handleRestartClick={this.handleRestartClick} 
            /> 
          }

          <Board 
            playerTurn={this.state.playerTurn}
            humanMarker={this.state.humanMarker}
            compMarker={this.state.compMarker}
            getEndState={this.getEndState}
            winner={this.state.winner}
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
