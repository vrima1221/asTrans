import React, { useState } from 'react';
import './ContactForm.scss';
import image from '../../images/oil_station.png';

export const ContactForm = () => {
  const [currentPhoneInput, setCurrentPhoneInput] = useState('');
  const [currentNameInput, setCurrentNameInput] = useState('');
  const [currentEmailInput, setCurrentEmailInput] = useState('');
  const [currentTownInput, setCurrentTownInput] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setCurrentNameInput('');
    setCurrentPhoneInput('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <h2 className="form__title">
        {'Заповніть форму і ми з Вами зв\'яжемось'}
      </h2>

      <img src={image} alt="" />

      <input
        type="text"
        name=""
        id="phone_input"
        className="form__input-field"
        value={currentPhoneInput}
        onChange={e => setCurrentPhoneInput(e.target.value)}
        placeholder="Телефон..."
      />

      <input
        type="text"
        name=""
        id="name_input"
        className="form__input-field"
        value={currentNameInput}
        onChange={e => setCurrentNameInput(e.target.value)}
        placeholder="Ім'я..."
      />

      <input
        type="email"
        name=""
        id="email_input"
        className="form__input-field"
        value={currentEmailInput}
        onChange={e => setCurrentEmailInput(e.target.value)}
        placeholder="E-mail..."
      />

      <input
        type="text"
        name=""
        id="town_input"
        className="form__input-field"
        value={currentTownInput}
        onChange={e => setCurrentTownInput(e.target.value)}
        placeholder="Місто доставки..."
      />

      <button type="submit" className="form__button">
        Надіслати
      </button>
    </form>
  );
};
