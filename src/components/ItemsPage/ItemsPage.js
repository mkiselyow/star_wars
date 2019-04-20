import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import Error from '../Error/Error'

export default class ItemsPage extends Component {

  state = {
    selectedItem: null,
    hasError: false
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
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
    const itemsType = this.props.itemsType;

    if (this.state.hasError) {
      return <Error/>
    }

    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList
            onItemSelected={this.onItemSelected}
            pageOnError={this.onError}
            itemsType={itemsType}/>
        </div>
        <div className='col-md-6'>
          <ItemDetails
            id={this.state.selectedItem}
            pageOnError={this.onError}
            itemType={itemsType}
          />
        </div>
      </div>
    )
  }
};