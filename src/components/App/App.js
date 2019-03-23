import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService/SwapiService';
import CssGoesOverChars from '../../services/CssGoesOverChars/CssGoesOverChars';
import Header from '../Header/Header';
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PeoplePage from '../PeoplePage/PeoplePage';

import './App.css';

export default class App extends Component {

  isFetchInProgress = false;

  changeProgress = (boolean) => {
    this.isFetchInProgress = boolean;
    if (document.getElementById('progress')) {
      document.getElementById('progress')
        .style.visibility = this.isFetchInProgress ? 'visible' : 'hidden';
    }
  };

  componentDidMount() {
    CssGoesOverChars.prototype.start('dynamicText');
  };

  render() {
    this.changeProgress(true);
    (new SwapiService()).getResource('planets')
      .then((body) => {
        this.changeProgress(false);
        console.log(body);
      })
      .catch((err) => {
        console.log(err.message);
        this.changeProgress(false);
      });

    return (
      <div className='app container'>
        <article
          id='dynamicText'
          className='my-3'
        >Star Wars Database</article>
        <Header/>
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

        <RandomPlanet/>

        <PeoplePage/>
      </div>
    )
  }
};