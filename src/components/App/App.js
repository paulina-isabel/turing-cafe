import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import getData from '../../apiCalls';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';

function App() {

  const [reservations, setReservations] = useState([])

  // useEffect(() => {
  //   const reservations = getData()
  //   console.log(reservations, 'this is data')
  // }, []);

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
  }, [])
  
  console.log(reservations, 'this is reservations')
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 