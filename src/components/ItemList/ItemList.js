import React from 'react';
import { withRouter } from "react-router-dom";

import './ItemList.css';
import Spinner from "../Spinner/Spinner"
import Error from "../Error/Error";
import withData from "../hoc-helpers/withData";
import withSwapiService from "../hoc-helpers/withSwapiService";

const ItemList = ({data, error, history, itemsType}) => {
  const onItemSelected = (id) => {
    history.push(`/${itemsType}/selectedItem/${id}`);
  };

  const prepareList = () => {
    if (data) {
      return data.map((item) => {
        return (
          <ItemListLink
            key={item.id}
            href={"#"}
            title={renderItem.call(this, item)}
            id={item.id}
            onClick={() => onItemSelected(item.id)}
          />
        )
      })
    }
  };

  const content = data ? prepareList() : null;
  const spinner = (!data && !error) ? <Spinner/> : null;
  const errorMessage = error ? <Error/> : null;

  return (
    <article className='itemList my-2'>
      <ul className='list-group'>
        {spinner}
        {content}
        {errorMessage}
      </ul>
    </article>
  )
};

const ItemListLink = ({title, onClick}) => {
  return (
    <li
      onClick={onClick}
      className='list-group-item d-flex justify-content-between align-items-center hover-color'>
      <div className='item-list-item-link'>
        {title}
      </div>
    </li>
  )
};

const renderItem = function(item) {
  switch (item.itemsType) {
    case 'people':
      return `${item.name} (gender: ${item.gender})`;
    case 'starships':
      return `${item.name} (cargo capacity: ${item.cargo_capacity})`;
    case 'planets':
      return `${item.name} (diameter: ${item.diameter})`;
    default:
      return item.name;
  }
};

export default withRouter(withSwapiService(withData(ItemList)));