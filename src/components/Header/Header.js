import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <ul className="nav nav-list-item-container">
          <li className="nav-item">
            <a className="nav-link nav-list-item" href="#">People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-list-item" href="#">Planets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-list-item" href="#">Ships</a>
          </li>
        </ul>
      </header>
    )
  }
}