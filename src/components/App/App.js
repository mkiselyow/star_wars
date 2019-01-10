import React, {Component} from 'react';
import SwapiService from '../SwapiService/SwapiService';
import CssGoesOverChars from '../CssGoesOverChars/CssGoesOverChars';

export default class App extends Component {
  render() {
    const article = document.getElementsByTagName('body')[0]
      .appendChild(document.createElement('article'));
    article.id = 'dynamicText';
    article.innerHTML = 'I am Super Man!';
    CssGoesOverChars.prototype.start(article.id);

    (new SwapiService()).getResource(undefined, undefined,1)
      .then((body) => console.log(body))
      .catch((err) => console.log(err.message));

    return <progress value="50" max="1000"></progress>
  }
};