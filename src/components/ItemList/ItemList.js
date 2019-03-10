import React, {Component} from 'react';
import './ItemList.css';

export default class ItemList extends Component {
  render() {
    return (
      <article className='itemList my-2'>
        <ul className='list-group'>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
          <ItemListLink href={"#"} title="Item"/>
        </ul>
      </article>
    )
  }
}

const ItemListLink = ({href, title}) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
      <a className='item-list-item-link' href={href}>{title}</a>
    </li>
  )
};