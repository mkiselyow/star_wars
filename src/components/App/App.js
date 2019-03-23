import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService/SwapiService';
import CssGoesOverChars from '../../services/CssGoesOverChars/CssGoesOverChars';
import Header from '../Header/Header';
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
// import PlanetDetails from "../PlanetDetails/PlanetDetails";
// import StarshipDetails from "../StarshipDetails/StarshipDetails";

import './App.css';

export default class App extends Component {

  state = {
    selectedPerson: null
  };

  isFetchInProgress = false;

  changeProgress = (boolean) => {
    this.isFetchInProgress = boolean;
    if (document.getElementById('progress')) {
      document.getElementById('progress')
        .style.visibility = this.isFetchInProgress ? 'visible' : 'hidden';
    }
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  };

  componentDidMount() {
    CssGoesOverChars.prototype.start('dynamicText');
  }

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

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className='col-md-6'>
            <PersonDetails id={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    )
  }
};