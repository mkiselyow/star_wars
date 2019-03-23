import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService/SwapiService';
import Spinner from '../Spinner/Spinner';
import DetailsContent from '../DetailsContent/DetailsContent';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    typeOfItem: null,
    error: false,
    imageExists: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchPerson();
    }
  };

  onError = (err) => {
    console.log(err);
    this.setState({error: true});
  };

  onNoError = () => {
    this.setState({error: false});
  };

  fetchPerson() {
    const id = this.props.id;
    this.swapiService
      .getResource('people', id)
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
    const isItemSelected = this.props.id;
    const content = isPlanetEmpty
      ? <DetailsContent
        imageExists={imageExists}
        item={{...item}}/>
      : null;
    const spinner = !isPlanetEmpty && !isError && isItemSelected
      ? <Spinner/>
      : null;
    const errorMsg = isError
      ? <div>An error occurred</div>
      : null;

    return (
      <article className='person-details container bg-gray rounded'>
        <div className='my-2 row d-flex justify-content-center align-items-center'>
          {spinner}
          {content}
          {errorMsg}
        </div>
      </article>
    )
  }
}