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
      yourTurn: false,
      compTurn: false,
      yourMarker: null,
      compMarker: null
    };
  }
  
  handleOptionClick = (e) => {
    const compMarker = e.target.innerHTML === 'X' ? 'O' : 'X';

    this.setState({
      atStart: false,
      yourTurn: true, 
      yourMarker: e.target.innerHTML,
      compMarker: compMarker
    });
  }

  changeTurns = () => {
    if (this.state.yourTurn) {
      this.setState({ yourTurn: false, compTurn: true });
    } else {
      this.setState({ yourTurn: true, compTurn: false });
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
            yourTurn={this.state.yourTurn}
            compTurn={this.state.compTurn}
            yourMarker={this.state.yourMarker}
            compMarker={this.state.compMarker}
            changeTurns={this.changeTurns}
          />
          <Turns 
            yourTurn={this.state.yourTurn}
            compTurn={this.state.compTurn}
            yourMarker={this.state.yourMarker}
            compMarker={this.state.compMarker}
          />
        </main>
      </div>
    );
  }
}

export default Game;
