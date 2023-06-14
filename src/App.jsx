import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import './images/oil_station.png';
import { ContactForm } from './components/ContactForm/ContactForm';

export const App = () => (
  <div className="starter">
    <div className="main">
      <div className="wrapper">
        <Header />
        <ContactForm />
      </div>
    </div>
  </div>
);
