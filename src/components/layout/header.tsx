/**
 * Component responsible for rendering the Search Bar
 */
import React from 'react';
import './header.css';
import logo from '../../logo.svg';

const Header: React.FC = () => {
  return <header>
    <img src={logo} className="App-logo" alt="logo" />
  </header>
}

export default Header;