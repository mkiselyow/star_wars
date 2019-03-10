import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <ul className="nav nav-list-item-container">
          <Link href={"#"} title="People"/>
          <Link href={"#"} title="Planets"/>
          <Link href={"#"} title="Ships"/>
        </ul>
      </header>
    )
  }
}

const Link = ({href, title}) => {
  return (
    <li className="nav-item">
      <a className="nav-link nav-list-item" href={href}>{title}</a>
    </li>
  )
};