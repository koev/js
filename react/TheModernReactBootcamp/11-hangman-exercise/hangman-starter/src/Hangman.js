import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from "./words";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
      gameover:false
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }



  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    let NewState =  new Set(this.state.answer.split(''));



    if (!(this.state.nWrong < this.props.images.length-2)) {
     this.setState({
        gameover: true
      })
    }

    this.setState(st => ({
      guessed: st.gameover ? NewState : st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));


  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        key={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        className="key"
      >
        {ltr}
      </button>
    ));
  }

  restart() {
    this.setState(st => ({
      guessed: new Set(),
      answer: randomWord(),
      nWrong: 0,
      gameover: false
    }));
  }

  /** render: render game */
  render() {

    let keyboard;
    if (!this.state.gameover) {
      keyboard = <p className='Hangman-btns'>{this.generateButtons()}</p>
    } else {
      keyboard = <div><p>game over</p><button onClick={this.restart}>restart</button></div>
    }

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} />
        <p>Number wrong: {this.state.nWrong}</p>
        <p className='Hangman-word'>{this.guessedWord()}</p>

        {keyboard}

      </div>
    );
  }
}

export default Hangman;
