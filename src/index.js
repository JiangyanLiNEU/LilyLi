import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/Navbar";

ReactDOM.render(
  <div>
    <NavBar/>
    <App />
  </div>,
  document.getElementById('root')
);
