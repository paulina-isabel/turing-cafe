import React, { useState } from 'react';
import './Form.css';

const Form = ({ addReservation }) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guestNumber, setGuestNumber] = useState('');

  const clearInputs = () => {
    setName('')
    setDate('')
    setTime('')
    setGuestNumber('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      guestNumber
    };
    addReservation(newReservation);
    clearInputs();
  };

  return (
    <div className='resy-form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <label htmlFor="guestNumber">Number of Guests:</label>
          <input
            type="text"
            id="guestNumber"
            value={guestNumber}
            onChange={(e) => setGuestNumber(e.target.value)}
            required
          />

          <button type="submit">Make Reservation</button>
        </div>
      </form>
    </div>
  );
};

export default Form;