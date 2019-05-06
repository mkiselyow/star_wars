import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({onToggleAPI}) => {
  return (
    <header className='header'>
      <ul className="nav nav-list-item-container">
        <ListItem title="People"
                  route="/people/"/>
        <ListItem title="Planets"
                  route="/planets/"/>
        <ListItem title="Ships"
                  route="/starships/"
        />
        <ListItem title="Login Page"
                  route="/login"
        />
        <ListItem title="Secret Page"
                  route="/secret"
        />
        <ListItem
          title="Toggle API"
          onClick={onToggleAPI}
        />
      </ul>
    </header>
  )
};

const ListItem = ({title, route, onClick}) => {
  const TagName = route ? Link : 'a';
  return (
    <li className={`nav-item`}>
      <TagName to={route}
        className="nav-link nav-list-item"
        onClick={onClick}
      >{title}</TagName>
    </li>
  )
};

export default Header;