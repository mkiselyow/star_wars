import React, {Component} from 'react';
import SwapiService from '../SwapiService/SwapiService';
import CssGoesOverChars from '../CssGoesOverChars/CssGoesOverChars';

export default class App extends Component {
  isFetchInProgress = false;

  changeProgress = (boolean) => {
    this.isFetchInProgress = boolean;
    if (document.getElementById('progress')) {
      document.getElementById('progress')
        .style.visibility = this.isFetchInProgress ? 'visible' : 'hidden';
    }
  };

  render() {
    const article = document.getElementsByTagName('body')[0]
      .appendChild(document.createElement('article'));
    article.id = 'dynamicText';
    article.className = 'my-3';
    article.innerHTML = 'I am Super Man!';
    CssGoesOverChars.prototype.start(article.id);

    this.changeProgress(true);
    (new SwapiService()).getResource(undefined, undefined,1)
      .then((body) => {
        this.changeProgress(false);
        console.log(body);
      })
      .catch((err) => {
        console.log(err.message);
        this.changeProgress(false);
      });

    return (
      <div  className='d-flex justify-content-center align-items-center m-3'>
        <div
          className="progress"
          style={{width: '35%'}}
          id='progress'
        >
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: '100%'}}
          > </div>
        </div>
      </div>
    )
  }
};