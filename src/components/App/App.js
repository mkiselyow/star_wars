import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService/SwapiService';
import DummySwapiService from '../../services/DummySwapiService/DummySwapiService';
import Header from '../Header/Header';
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemsPage from '../ItemsPage/ItemsPage';
import Title from '../Title/Title';
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context';

import './App.css';

export default class App extends Component {
  state = {
    swapiService: SwapiService
  };

  isFetchInProgress = false;

  changeProgress = (boolean) => {
    this.isFetchInProgress = boolean;
    if (document.getElementById('progress')) {
      document.getElementById('progress')
        .style.visibility = this.isFetchInProgress ? 'visible' : 'hidden';
    }
  };

  onToggleAPI = () => {
    this.setState(({swapiService}) => {
      const newState = swapiService === SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: newState
      }
    })
  };

  render() {
    this.changeProgress(true);
    (this.state.swapiService).getAllResources('planets')
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
        <SwapiServiceProvider value={this.state.swapiService}>
          <Title/>
          <Header onToggleAPI={this.onToggleAPI}/>
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

          <ItemsPage
            itemsType={'people'}
          />
          <ItemsPage
            itemsType={'starships'}
          />
          <ItemsPage
            itemsType={'planets'}
          />
        </SwapiServiceProvider>
      </div>
    )
  }
};