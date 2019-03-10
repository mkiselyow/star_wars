import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService/SwapiService';
import Spinner from '../Spinner/Spinner';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  updatePlanet() {
    const id = 12;//Math.floor(Math.random()*25) + 2;
    this.swapiService
      .getResource('planets', id)
      .then((planet) => {
        this.setState({...planet})
      })
  };

  render() {
    const {...planet} = this.state;
    const isPlanetEmpty = !!Object.values(planet).join('');
    const content = isPlanetEmpty
      ? <PlanetDetailsContent planet={planet}/>
      : null;
    const spinner = !isPlanetEmpty
      ? <Spinner/>
      : null;

    return (
      <article className='random-planet-content container bg-gray rounded'>
        <div className='row'>
          {spinner}
          {content}
        </div>
      </article>
    )
  }
}

const PlanetDetailsContent = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
        <img className='rounded my-2 random-planet-img' src={id ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : ''} alt=""/>
        <Spinner/>
      </div>
      <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-content-middle'>
        <header className='my-3'>
          <span>{name}</span>
        </header>
        <table className="table table-hover">
          <tbody>
          <tr className="table-active">
            <th scope="row">Population</th>
            <td>{population}</td>
          </tr>
          <tr className="table-active">
            <th scope="row">Rotation Period</th>
            <td>{rotationPeriod}</td>
          </tr>
          <tr className="table-active">
            <th scope="row">Diameter</th>
            <td>{diameter}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}