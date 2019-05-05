import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const ItemsPage = ({itemsType, match}) => {
  const selectedItem = match.params.id;
  const itemDetails = selectedItem
    ? <Link to={`/${itemsType}/${selectedItem}`}>
        <ItemDetails
          itemType={itemsType}/>
      </Link>
    : null;

  return (
    <ErrorBoundary>
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList
            itemsType={itemsType}
          />
        </div>
        <div className='col-md-6'>
          {itemDetails}
        </div>
      </div>
    </ErrorBoundary>
  )
};

export default withRouter(ItemsPage);