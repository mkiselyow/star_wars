import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class ItemsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  };

  render() {
    const itemsType = this.props.itemsType;

    return (
      <ErrorBoundary>
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onItemSelected}
              itemsType={itemsType}/>
          </div>
          <div className='col-md-6'>
            <ItemDetails
              id={this.state.selectedItem}
              itemType={itemsType}
            />
          </div>
        </div>
      </ErrorBoundary>
    )
  }
};