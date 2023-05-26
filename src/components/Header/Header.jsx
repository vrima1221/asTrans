import React from 'react';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__logo">Logo</div>
    <nav className="header__nav">
      <div className="nav__item">Home</div>
      <div className="nav__item">About</div>
      <div className="nav__item">Contacts</div>
    </nav>
  </header>
);
