import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import withSwapiService from '../hoc-helpers/withSwapiService';

class ItemsPage extends Component {

  state = {
    selectedItem: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.swapiService !== prevProps.swapiService) {
      this.setState({selectedItem: null})
    }
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  };

  render() {
    const itemsType = this.props.itemsType;
    const itemDetails = this.state.selectedItem
      ? <ItemDetails
        id={this.state.selectedItem}
        itemType={itemsType}
      />
      : null;

    return (
      <ErrorBoundary>
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onItemSelected}
              itemsType={itemsType}
            />
          </div>
          <div className='col-md-6'>
            {itemDetails}
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

export default withSwapiService(ItemsPage);