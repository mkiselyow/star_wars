import React from 'react';
import './Header.css';

const Header = ({onToggleAPI}) => {
  return (
    <header className='header'>
      <ul className="nav nav-list-item-container">
        <Link href={"#"} title="People"/>
        <Link href={"#"} title="Planets"/>
        <Link href={"#"} title="Ships"/>
        <Link
          href={"#"}
          title="Toggle API"
          onClick={onToggleAPI}
        />
      </ul>
    </header>
  )
};

const Link = ({href, title, onClick}) => {
  return (
    <li className={`nav-item`}>
      <a
        className="nav-link nav-list-item"
        href={href}
        onClick={onClick}
      >{title}</a>
    </li>
  )
};

export default Header;