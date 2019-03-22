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
    error: false,
    imageExists: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(
      this.updatePlanet.bind(this),
      5000);
  }

  componentWillUnmount() {
    this.interval = null;
  }

  onError = (err) => {
    this.setState({error: true});
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
      .getResource('planets', id)
      .then((planet) => {
        this.setState({...planet});
        this.imageExists();
      })
      .catch(this.onError);
  };

  imageExists = async () => {
    const url =
      `https://starwars-visualguide.com/assets/img/planets/${this.state.id}.jpg`;
    const res = (await fetch(url)).status;

    if (res !== 404) {
      this.setState({imageExists: true});
    } else {
      this.setState({imageExists: false});
    }
  };

  render() {
    const {error, imageExists, ...planet} = this.state;
    const isPlanetEmpty = !!Object.values(planet).join('');
    const isError = error;
    const content = isPlanetEmpty
      ? <PlanetDetailsContent
        imageExists={imageExists}
        planet={{...planet}}/>
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
  render() {
    const {id, name, population, rotationPeriod, diameter} = this.props.planet;
    const imageExists = this.props.imageExists;

    return (
      <React.Fragment>
        {imageExists ? <PlanetDetailsImg id={id}/> : null}
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


const PlanetDetailsImg = ({id}) => {
  const url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  return (
    <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
      <img
        className='rounded my-2 random-planet-img'
        src={url} alt=""/>
    </div>
  )
};