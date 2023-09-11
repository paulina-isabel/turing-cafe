import React, { useState } from 'react';
import './Form.css';

const Form = ({ addReservation }) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  const clearInputs = () => {
    setName('')
    setDate('')
    setTime('')
    setNumber('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      number
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
            id="number"
            placeholder='Number of Guests'
            value={number}
            onChange={(e) => {
              setNumber(e.target.value)
            }}
            required
          />

          <button type="submit">Make Reservation</button>
        </div>
      </form>
    </div>
  );
};

export default Form;