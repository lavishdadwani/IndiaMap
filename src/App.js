import React from 'react';
import IndiaMap from './Mycomponants/IndiaMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import StateMap from './Mycomponants/StateMap'
import {Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
     <Routes>
        <Route exact path="/" element={<IndiaMap/>}/>
        <Route exact path="/StateRoute/:id" element={<StateMap/>}/>
    </Routes>
    </>
  )
}

export default App;