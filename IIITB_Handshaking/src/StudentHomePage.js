import { color } from '@mui/system';
import React from 'react';
import {Card, CardBody, Input, ListGroup,ListGroupItem} from 'reactstrap';

import { Container, Row ,Col} from 'reactstrap';
import './StudentHomePage.css';
import { Navbar,NavbarBrand,Nav } from 'reactstrap';
import { Button } from "@material-ui/core";

function notify(){
  window.location.href = '/Login' 
}

function StudentHomePage()
{
  return (<div>

    {/* <Container/> */}

      <div style={{height:210, backgroundColor:"orange" }} className="centered-div" > 
      <Row >
        <p className='text-center font-link' >
         iGLOBE
         </p>
      </Row>

      <div>
        <div class="btn-text-right">
          <Button style={{backgroundColor:'#d6800c', color:'#ffffff'}}>LogOut</Button>
        </div>
        <div class="btn-text-left">
          <h5 style={{color:"white"}}>Welcome : {localStorage.getItem('user')}</h5>
        </div>
      </div>
      {/* <Button variant="contained" size="medium" onClick={notify}>
              Logout
            </Button> */}

      
      <Navbar bg="primary" variant="dark" style={{backgroundColor: "#232F3E",height:60}} >
        
        <img src="/iiitb_logo.jpg" className="img" style={{weight: 40 ,height:40}}/>
    
        <NavbarBrand href="/home" style={{color:"white"}} >
          Home
        </NavbarBrand>

        <NavbarBrand href="/donate" style={{color:"white"}}>
          Donate
        </NavbarBrand>

        <NavbarBrand href="/buy" style={{color:"white"}}>
          Buy
        </NavbarBrand>

        <NavbarBrand href="/sell" style={{color:"white"}}>
          Sell
        </NavbarBrand>

        <NavbarBrand href="/lostandfound" style={{color:"white"}}>
          Lost & Found
        </NavbarBrand>

        <NavbarBrand href="/findRooms" style={{color:"white"}}>
          Find Rooms
        </NavbarBrand>
      </Navbar>
    </div>
  </div>)
};

  export default StudentHomePage ;

