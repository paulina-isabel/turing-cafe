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

          <input
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            id="Date"
            placeholder='Date (mm/dd)'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="text"
            id="time"
            placeholder='Time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          
          <input
            type="text"
            id="guestNumber"
            placeholder='Number of Guests'
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