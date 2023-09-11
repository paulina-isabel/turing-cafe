import './App.css';
import React from 'react';
import { useEffect } from 'react';
import getData from '../../apiCalls';
import Form from '../Form/Form';

function App() {

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 