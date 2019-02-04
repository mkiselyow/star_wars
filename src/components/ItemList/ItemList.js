import React, {Component} from 'react';
import './ItemList.css';

export default class ItemList extends Component {
  render() {
    return (
      <article className='itemList my-2'>
        <ul className='list-group'>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
            <a className='item-list-item-link' href='#'>Item</a>
          </li>
        </ul>
      </article>
    )
  }
}