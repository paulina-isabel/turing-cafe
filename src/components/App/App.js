import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import getData from '../../apiCalls';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData()
        setReservations(data)
        console.log(data, 'this is data')
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, []);
  
  console.log(reservations, 'this is reservations')

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation}/>
      <Reservations reservations={reservations}/>
    </div>
  );
};

export default App; 