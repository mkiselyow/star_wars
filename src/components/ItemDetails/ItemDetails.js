import React, {Component} from 'react';

import Spinner from '../Spinner/Spinner';
import DetailsContent from '../DetailsContent/DetailsContent';

import './ItemDetails.css';
import Error from "../Error/Error";
import withSwapiService from '../hoc-helpers/withSwapiService';

class ItemDetails extends Component {

  state = {
    id: null,
    name: null,
    typeOfItem: null,
    error: false,
    imageExists: false,
    fetchingNextObj: true
  };

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchingNextObj(true);
      this.fetchItem(this.props.itemType);
    }
  };

  fetchingNextObj(boolean) {
    this.setState({fetchingNextObj: boolean})
  };

  onError = () => {
    this.setState({error: true});
  };

  onNoError = () => {
    this.setState({error: false});
  };

  fetchItem(itemType) {
    const id = this.props.id;
    this.props.swapiService
      .getResourceById(itemType, id)
      .then((item) => {
        this.setState({...item});
        this.fetchingNextObj(false);
        if (this.state.error) {
          this.onNoError();
        }
      })
      .catch((err) => this.onError(err));
  };

  render() {
    const {error, imageExists, fetchingNextObj, ...item} = this.state;
    const isItemEmpty = !fetchingNextObj && !!Object.values(item).join('');
    const isError = error;
    const isItemSelected = this.props.id;
    const content = isItemEmpty
      ? <DetailsContent
        imageExists={imageExists}
        item={{...item}}/>
      : null;
    const spinner = !isItemEmpty && !isError && isItemSelected
      ? <Spinner/>
      : null;
    const errorMsg = isError
      ? <Error/>
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

export default withSwapiService(ItemDetails);