import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

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
    fetchingNextObj: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.swapiService !== prevProps.swapiService) {
      this.fetchingNextObj(false);
    }
  };

  componentDidMount() {
    const { match } = this.props;
    if (match.params.id) {
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
    this.fetchingNextObj(true);
    const { match } = this.props;
    this.props.swapiService
      .getResourceById(itemType, match.params.id)
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
    const { isFullDescription, match } = this.props;
    const isItemSelected = match.params.id;
    const content = isItemEmpty
      ? <DetailsContent
        imageExists={imageExists}
        item={{...item}}
        isFullDescription={isFullDescription}
      />
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

export default withRouter(withSwapiService(ItemDetails));