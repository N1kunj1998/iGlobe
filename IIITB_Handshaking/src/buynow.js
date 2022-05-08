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




function Buynow(){

  const notify = async() => { 
    await buyProduct();
    window.location.href = 'https://phonepe.force.com/login?locale=us' ;
  }

  useEffect(() => {
    console.log(`${base_url}/buySellProduct/${localStorage.getItem('sid')}/${localStorage.getItem('id')}`);
  });


  const [userdata,setuser]=useState({});
  //form handler function
  
  const [val,setval]=useState({});
  
  const handleform_login=(e)=>{
  console.log(userdata);
  // postdatatoserver(userdata);
  e.preventDefault();
  
  
  };
  
  const buyProduct = async () => {
    //console.log(`${base_url}/buySellProduct/` + localStorage.getItem('sid'));
    await axios.get(`${base_url}/buySellProduct/${localStorage.getItem('sid')}/${localStorage.getItem('id')}`).then(
    (response)=>{
        console.log(response);
        console.log("success");
    },
    (error)=>{
        console.log(error);
        console.log("error");
    }
  );
  localStorage.removeItem('sid');
  };

const avatarStyle={backgroundColor:'#1bbd7e'}

    return (
    
<div>
                <Container className="text-center my-3"/>
      <Card>
        <CardBody >
        {/* <Avatar style={avatarStyle}></Avatar> */}
        <img src="/iiitb_logo.jpg" className="img" style={{weight: 40 ,height:40}}/>
        <p className="text-center my-3" style={{color: "Blue"}}>
      
         Buy Now. {' '}
        </p>

<Row>
<Col>
</Col>
<Col>

<ListGroup>

  <ListGroupItem>
   Contact Details: 6870096221
  </ListGroupItem>
  <ListGroupItem>
    UPI ID:  {localStorage.getItem('username')}@icici
  </ListGroupItem>

 
</ListGroup>


<Button  onClick={notify} >Pay Now</Button>
</Col>
</Row>

        </CardBody>
      </Card>  
      </div>)    
    };
    
    export default Buynow;

    