import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService/SwapiService';
import Header from '../Header/Header';
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemsPage from '../ItemsPage/ItemsPage';
import Title from '../Title/Title';
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context';
import {SwapiServiceConsumer} from '../swapi-service-context/swapi-service-context';

import './App.css';

export default class App extends Component {

  isFetchInProgress = false;
  SwapiService = new SwapiService();

  changeProgress = (boolean) => {
    this.isFetchInProgress = boolean;
    if (document.getElementById('progress')) {
      document.getElementById('progress')
        .style.visibility = this.isFetchInProgress ? 'visible' : 'hidden';
    }
  };

  render() {
    this.changeProgress(true);
    (this.SwapiService).getAllResources('planets')
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
        <SwapiServiceProvider value={this.SwapiService}>
          <Title/>
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

          <SwapiServiceConsumer>
            {
              (swapiService) => {
                return (
                  <RandomPlanet swapiService={swapiService}/>
                )
              }
            }
          </SwapiServiceConsumer>

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