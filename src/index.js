import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    document.getElementById("root"));