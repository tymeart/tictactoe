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
      humanTurn: true,
      humanMarker: null,
      compMarker: null,
      spaces: Array(9).fill('')
    };
  }
  
  handleMarkerOptionClick = (e) => {
    const compMarker = e.target.innerHTML === 'X' ? 'O' : 'X';

    this.setState({
      atGameStart: false,
      humanMarker: e.target.innerHTML,
      compMarker: compMarker
    });
  }

  handleSquareClick = (e) => {
    if (this.state.humanTurn && this.state.winner === null) {
      const position = e.target.dataset.position;
      let spaces = this.state.spaces.slice();
      // only mark the square if it's empty
      if (spaces[position] === '') {
        spaces[position] = this.state.humanMarker;
        this.setState({ spaces: spaces });
        this.changeTurns();
      }
    }
  }

  handleRestartClick = () => {
    setTimeout(() => {
      this.setState({
        atGameStart: true,
        winner: null,
        spaces: Array(9).fill(''),
        humanTurn: true,
        humanMarker: null,
        compMarker: null
      })
     }, 300);
  }

  getEndState = (player) => {
    switch (player) {
      case 'human':
        setTimeout(() => this.setState({ winner: 'human' }), 600);
        break;
      case 'computer':
        setTimeout(() => this.setState({ winner: 'computer' }), 600);
        break;
      case 'tie':
        setTimeout(() => this.setState({ winner: 'tie' }), 600);
        break;
      default: 
        break;
    }
  }

  changeTurns() {
    this.setState({ humanTurn: !this.state.humanTurn });
  }

  getOpenSpaces() {
    let openSpaces = [];
    for (let i = 0; i < this.state.spaces.length; i++) {
      if (this.state.spaces[i] === '') { openSpaces.push(i); }
    }

    return openSpaces;
  }

  // pass in either 'X' or 'O'
  isGameOverFor(marker) {
    let playerChecked = this.state.humanMarker === marker ? 'human' : 'computer';

    if (
      (this.state.spaces[0] === marker && this.state.spaces[1] === marker && this.state.spaces[2] === marker) ||
      (this.state.spaces[3] === marker && this.state.spaces[4] === marker && this.state.spaces[5] === marker) ||
      (this.state.spaces[6] === marker && this.state.spaces[7] === marker && this.state.spaces[8] === marker) ||
      (this.state.spaces[0] === marker && this.state.spaces[3] === marker && this.state.spaces[6] === marker) ||
      (this.state.spaces[1] === marker && this.state.spaces[4] === marker && this.state.spaces[7] === marker) ||
      (this.state.spaces[2] === marker && this.state.spaces[5] === marker && this.state.spaces[8] === marker) ||
      (this.state.spaces[0] === marker && this.state.spaces[4] === marker && this.state.spaces[8] === marker) ||
      (this.state.spaces[2] === marker && this.state.spaces[4] === marker && this.state.spaces[6] === marker)
    ) {
      // a win
      if (playerChecked === 'human') {
        this.getEndState('human');
        return true;
      } else if (playerChecked === 'computer') {
        this.getEndState('computer');
        return true;
      }
    } else if (this.getOpenSpaces().length === 0) {
      this.getEndState('tie');
      return true;
    } else {
      // no win, no tie yet
      return false;
    }
  }

  componentDidUpdate() {
    // check for game over
    // computer's move

    // need to delay
    const openSpaces = this.getOpenSpaces();
    if (this.state.winner === null && (this.isGameOverFor(this.state.humanMarker) || this.isGameOverFor(this.state.compMarker))) {
      console.log('GAME OVER');
      return;
    } else if (!this.state.humanTurn && openSpaces.length !== 0 && this.state.winner === null) {
      const randomPosition = openSpaces[Math.floor(Math.random() * Math.floor(openSpaces.length))];
      let spaces = this.state.spaces.slice();
      spaces[randomPosition] = this.state.compMarker;
      setTimeout(() => {
        this.setState({ spaces: spaces });
      }, 1200);
      this.changeTurns();
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
              handleMarkerOptionClick={this.handleMarkerOptionClick} 
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
            spaces={this.state.spaces}
            handleSquareClick={this.handleSquareClick}
          />
          <Turns 
            humanTurn={this.state.humanTurn}
            humanMarker={this.state.humanMarker}
            compMarker={this.state.compMarker}
          />
        </main>
      </div>
    );
    }
  }

export default Game;
