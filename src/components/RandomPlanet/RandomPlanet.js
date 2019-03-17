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
    diameter: null,
    error: false
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  onError = (err) => {
    this.setState({error: true});
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
      .getResource('planets', id)
      .then((planet) => {
        this.setState({...planet})
      })
      .catch(this.onError);
  };

  render() {
    const {error, ...planet} = this.state;
    const isPlanetEmpty = !!Object.values(planet).join('');
    const isError = error;
    const content = isPlanetEmpty
      ? <PlanetDetailsContent {...planet}/>
      : null;
    const spinner = !isPlanetEmpty && !isError
      ? <Spinner/>
      : null;
    const errorMsg = isError
      ? <div>An error occurred</div>
      : null;

    return (
      <article className='random-planet-content container bg-gray rounded'>
        <div className='row d-flex justify-content-center align-items-center'>
          {spinner}
          {content}
          {errorMsg}
        </div>
      </article>
    )
  }
}

class PlanetDetailsContent extends Component {
  state = {
    imageExists: false
  };

  constructor(props) {
    super(props);
    if (!this.state.imageExists && this.props && this.props.id) {
      this.imageExists();
    }
  };

  imageExists = async () => {
    const url =
      `https://starwars-visualguide.com/assets/img/planets/${this.props.id}.jpg`;
    const res = (await fetch(url)).status;

    if (res !== 404) {
      this.setState({imageExists: true});
    }
  };

  render() {
    const {id, name, population, rotationPeriod, diameter} = this.props;

    const img = () => {
      const url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
      if (this.state.imageExists) {
        return (
          <img
            className='rounded my-2 random-planet-img'
            src={url} alt=""/>
        )
      }
    };

    return (
      <React.Fragment>
        <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
          {img()}
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
}