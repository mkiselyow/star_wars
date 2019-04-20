import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import Error from '../Error/Error'

export default class PeoplePage extends Component {

  state = {
    selectedPerson: null,
    hasError: false
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  };

  onError = () => {
    this.setState({
      hasError: true
    })
  };

  render() {

    if (this.state.hasError) {
      return <Error/>
    }

    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList
            onItemSelected={this.onPersonSelected}
            pageOnError={this.onError}
            itemsType={'people'}/>
        </div>
        <div className='col-md-6'>
          <PersonDetails id={this.state.selectedPerson} pageOnError={this.onError}/>
        </div>
      </div>
    )
  }
};