import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import FindRooms from './FindRooms';
import Donate from './Donate';
import GeeksforGeeks from './Gfg';
import Login from './Login';
import StudentHomePage from './StudentHomePage';
import Getimage from './Getimage';
import { Buffer } from 'buffer';



ReactDOM.render(
  <React.StrictMode>
    <App /> 
    {/* <StudentHomePage /> */}
     {/* <Getimage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
