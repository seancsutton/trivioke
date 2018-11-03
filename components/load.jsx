/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import Filters from './filters.jsx';
import Team from './teamTable.jsx';
import Game from './game.jsx';

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: 'medium',
      category: 9,
      trivia: false,
      team1: '',
      team2: '',
    };
    this.begin = this.begin.bind(this);
    this.handeleClick = this.handeleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  begin() {
    this.setState({ trivia: true });
  }

  handeleClick() {
    this.setState({
      [event.target.name]: event.target.id,
    });
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      category, diff, team1, team2, trivia,
    } = this.state;
    if (!trivia) {
      return (
        <div>
          <div key="team">
            <Team handleChange={this.handleChange} />
          </div>
          <div key="filters">
            <Filters click={this.handeleClick} />
          </div>
          <div key="diff">
            <button type="button" name="diff" id="easy" onClick={this.handeleClick}>Easy</button>
            <button type="button" name="diff" id="medium" onClick={this.handeleClick}>Medium</button>
            <button type="button" name="diff" id="hard" onClick={this.handeleClick}>Hard</button>
          </div>
          <div key="begin">
            <button type="button" onClick={this.begin}>Begin Game</button>
          </div>
        </div>
      );
    }
    return (
      <div key="game">
        <Game category={category} diff={diff} name1={team1} name2={team2} />
      </div>
    );
  }
}
export default Load;
