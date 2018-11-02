import React, { Component } from 'react';

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
    score: 0,
    };
  }

  render() {
    const { question } = this.props;
    function escapeHtml(text) {
      return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&lsquo;/g, "'")
        .replace(/&rsquo;/g, "'");
    }
    if (question) {
      function shuffle(answerArr) {
        for (let i = answerArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answerArr[i], answerArr[j]] = [answerArr[j], answerArr[i]];
        }
        return answerArr;
      }
      const answers = [
        <button type="button" onClick={() => this.props.triviaRequest()}>{escapeHtml(question.correct_answer)}</button>,
        <button type="button">{escapeHtml(question.incorrect_answers[0])}</button>,
        <button type="button">{escapeHtml(question.incorrect_answers[1])}</button>,
        <button type="button">{escapeHtml(question.incorrect_answers[2])}</button>
      ];
      let shuffleArr = shuffle(answers);
      const multiChoice = [
        <div key="trivia">
          <div key="question">{escapeHtml(question.question)}</div>
          <div key="answers">{shuffleArr.map((answer, i) => <li key={i}>{answer}</li>)}</div>
        </div>,
      ];
      return <div>{multiChoice}</div>;
    } else {
      return <div>Loading</div>
    }
  }
}

export default Trivia;