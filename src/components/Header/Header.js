import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <ul className="nav nav-list-item-container">
        <Link href={"#"} title="People"/>
        <Link href={"#"} title="Planets"/>
        <Link href={"#"} title="Ships"/>
      </ul>
    </header>
  )
};

const Link = ({href, title}) => {
  return (
    <li className="nav-item">
      <a className="nav-link nav-list-item" href={href}>{title}</a>
    </li>
  )
};

export default Header;