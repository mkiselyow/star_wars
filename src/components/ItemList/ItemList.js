import React, {Component} from 'react';
import './ItemList.css';

export default class ItemList extends Component {
  render() {
    return (
      <article className='itemList'>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </article>
    )
  }
}