import React, {Component} from 'react';
import './CssGoesOverChars.css';

export default class CssGoesOverChars extends Component {
  activeLetterClass = 'char-active';

  state = {
    text: 'Star Wars Database',
    activeLetter: 0
  };

  componentDidMount () {
    setTimeout(this.nextActiveLetter.bind(this), 1000);
  };

  componentDidUpdate(prevState) {
    if (prevState.activeLetter !== this.state.activeLetter) {
      setTimeout(this.nextActiveLetter.bind(this), 1000);
    }
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
      <article
        id='dynamicText'
        className='my-3 word-wrapper'
      >{text}</article>
    );
  }
};