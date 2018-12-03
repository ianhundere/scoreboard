import React, { Component } from 'react';
import ScoreCard from './ScoreCard';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // set up state
    this.state = {
      scores: [
        {
          id: 1,
          name: "c.c.",
          score: 1001
        },
        {
          id: 2,
          name: "mel",
          score: 10
        },
        {
          id: 3,
          name: "sid",
          score: 800
        }
      ]
    }

  }
  render() {
    return (
      <div className="App">
        {''}
        <h1>Scoreboard App</h1>
        <div className="score-container">
          {this._scoresAsCards()}
        </div>
      </div>
    );
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <ScoreCard
          key={score.id}
          id={score.id}
          name={score.name}
          score={score.score}
          // handleClick={this._incrementScoreById.bind(this)} using bind
          handleClick={((e) => this._incrementScoreById(e))}

        />

      );
    });
    return cards;
  }
  // vers 1: .map, manually constructing replacement
  // _incrementScoreById(id) {
  //   // console.log("Wee hee hee!")
  //   // find the player in this.state.scores
  //   // increment their score
  //   const newScores = this.state.scores.map(score => {
  //     if (score.id !== id)
  //     return score
  //     else  {
  //       return {
  //         id: score.id,
  //         name: score.name,
  //         score: score.score + 1
  //       }
  //     }
  //   })
  //   // and call this.setState
  //   this.setState({
  //     scores: newScores
  //   })
  // }
  // vers 2: .map, using a shorthand to copy values out of the original
  // _incrementScoreById(id) {
  // find the player in this.state.scores
  // increment their score
  // const newScores = this.state.scores.map(score => {
  //   if(score.id !== id) {
  //     return score;
  // } else {
  //   return {
  //     ...score,
  //     score: score.score +1
  //   };
  // }
  // });
  // and call this.setState
  //   this.setState({
  //     scores: newScores
  //   })

  // }

  // vers 3: .map, object copy + ternary + implicit return
  // using a shorthand to copy values out of the original score
  // _incrementScoreById(id) {
  // find the player in this.state.score
  // increment their score
  // const newScores = this.state.scores.map(data => {
  //   return data.id !== id ? data : { ...data, score: data.score + 1};
  // });
  // and calling this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  //Version 0:
  _incrementScoreById(id) {
    // find the player in this.state.score and increment their score
    const newScores = this.state.scores.map(score => {
      // change the score for the matching id
      if (score.id === id) {
        score.score += 1;
      }
      return score;
    });

    this.setState({
      scores: newScores
    })
  }
}
export default App;
