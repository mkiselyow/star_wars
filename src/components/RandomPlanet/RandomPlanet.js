import React, {Component} from 'react';

import Spinner from '../Spinner/Spinner';
import DetailsContent from '../DetailsContent/DetailsContent';
import Error from '../Error/Error';
import withSwapiService from '../hoc-helpers/withSwapiService';

import './RandomPlanet.css';

class RandomPlanet extends Component {

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
  };

  componentWillUnmount() {
    this.interval = null;
  };

  onError = (err) => {
    console.log(err + ' === in random planet');
    this.setState({error: true});
    this.interval = null;
  };

  onNoError = () => {
    this.setState({error: false});
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.props.swapiService
      .getResourceById('planets', id)
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
      ? <Error/>
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
};

export default withSwapiService(RandomPlanet);