import React from 'react';
// import IndiaMap from './IndiaMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import Imsvg from './Icons/Imsvg';
import States from './Icons/States';
import {Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
     <Routes>
        <Route exact path="/" element={<Imsvg/>}/>
        <Route exact path="/StateRoute/:id" element={<States/>}/>
    </Routes>
    </>
  )
}

export default App;