import React from "react";
import { Container ,ListGroup,ListGroupItem} from "reactstrap";
import { Card,CardBody ,Button} from "reactstrap";
import { Form ,FormGroup,Label,Input,FormText} from "reactstrap";
import { Row,Col } from "reactstrap";
import axios from "axios";
import  { useEffect, useState } from "react";
import { Select } from "@material-ui/core";
import './App.css';
import base_url from "./api/bootapi";
import { MenuItem } from "@material-ui/core";
import { Grid,Paper, Avatar, TextField,  Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Buyproduct from './Buyproduct';




function ContactOwner(){
  
const avatarStyle={backgroundColor:'#1bbd7e'}

const notify = async() => { 
  await buyProduct();
  window.location.href = 'https://web.whatsapp.com/' ;
}


    const buyProduct = async () => {
      console.log(`${base_url}/buySellProduct/` + localStorage.getItem('did'));
      await axios.get(`${base_url}/buySellProduct/` + localStorage.getItem('did')).then(
      (response)=>{
          console.log(response);
          console.log("success");
      },
      (error)=>{
          console.log(error);
          console.log("error");
      }
    );
    localStorage.removeItem('did');
    };

    return (
    
<div>




                <Container className="text-center my-3"/>
      <Card>
        <CardBody >
        {/* <Avatar style={avatarStyle}></Avatar> */}
        <img src="/iiitb_logo.jpg" className="img" style={{weight: 40 ,height:40}}/>
        {/* <p className="text-center my-3" style={{color: "Blue"}}>
      
         Buy Now. {' '}
        </p> */}

<Row>
<Col>


</Col>
<Col>





<ListGroup>
  {/* <ListGroupItem>
  Amount:
  </ListGroupItem> */}
  <ListGroupItem>
   Contact Details: 6870096221
  </ListGroupItem>
  <ListGroupItem>
    Gmail ID:  {localStorage.getItem('user')}@gmail.com
  </ListGroupItem>

  {/* <ListGroupItem>
    Vestibulum at eros
  </ListGroupItem> */}
</ListGroup>


<Button  onClick={notify}>Whats App</Button>




</Col>
</Row>

        </CardBody>
      </Card>

      
    
      </div>)

      
    };
    
    export default ContactOwner;

    