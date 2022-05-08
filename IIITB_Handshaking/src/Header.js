import React from 'react';
import logo from './logo.svg'; // Tell webpack this JS file uses this image
import  './App.css';
console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return (
    <div className='App-logo'>

    <img src={logo} alt="Logo" />;
  </div>
  )
  
  
}

export default Header;