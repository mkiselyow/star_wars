import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './Title.css';

export default class Title extends Component {
  activeLetterClass = 'char-active';

  state = {
    text: 'Star Wars Database',
    activeLetter: 0
  };

  componentDidMount () {
    this.intervalId = setTimeout(this.nextActiveLetter.bind(this), 1000);

  };

  componentDidUpdate(prevState) {
    if (prevState.activeLetter !== this.state.activeLetter) {
      clearInterval(this.intervalId);
      this.intervalId = setTimeout(this.nextActiveLetter.bind(this), 1000);
    }
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  nextActiveLetter() {
    this.setState(({text, activeLetter}) => {
      return {
        activeLetter: (text.length > activeLetter) ? ++activeLetter : 0
      }
    })
  };

  wrapLetters() {
    const {text, activeLetter} = {...this.state};
    let counter = 0;

    return text.split('').map((char, index) => {
      let isActive = null;

      if (char !== ' ') {
        isActive = activeLetter === counter ? this.activeLetterClass : null;
        counter++;
      }

      return (
        <div
          key={index}
          className={`char-item ${isActive}`}>{char}
        </div>
      )
    })
  }

  render () {
    const text = this.wrapLetters();
    return (
      <Link
        to={"/"}
        className='my-3 word-wrapper title-link'
      >{text}</Link>
    );
  }
};