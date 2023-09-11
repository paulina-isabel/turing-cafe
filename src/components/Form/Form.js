import React, { useState } from 'react';
import './Form.css'

const Form = () => {

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guestNumber, setGuestNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      This is a form
      We need Name, Date(mm/dd), Time, and Number of Guests
      Then a sbumission button - "Make a reservation"
      <h1>Make a New Reservation</h1>
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
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="guestNumber">Number of Guests:</label>
          <input
            type="guestNumber"
            id="guestNumber"
            value={guestNumber}
            onChange={(e) => setGuestNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form