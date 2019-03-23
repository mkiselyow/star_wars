import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService/SwapiService';
import Spinner from '../Spinner/Spinner';
import DetailsContent from '../DetailsContent/DetailsContent';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    typeOfItem: null,
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
    console.log(err);
    this.setState({error: true});
  };

  onNoError = () => {
    this.setState({error: false});
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
      .getResource('planets', id)
      .then((item) => {
        this.setState({...item});
        if (this.state.error) {
          this.onNoError();
        }
      })
      .catch((err) => this.onError(err));
  };

  render() {
    const {error, imageExists, ...item} = this.state;
    const isPlanetEmpty = !!Object.values(item).join('');
    const isError = error;
    const content = isPlanetEmpty
      ? <DetailsContent
        imageExists={imageExists}
        item={{...item}}/>
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