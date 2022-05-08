import React from "react";
import { Container, ListGroup } from "reactstrap";
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



function student(){ 

  window.location.href = '/Home' ;

}
// function student(){ 

//   window.location.href = '/Alu' ;

// }
// function student(){ 

//   window.location.href = '/Home' ;

// }


function Login(){
  


  useEffect(()=>{
      document.title="Login||IIITB"
  },[]);
//function to call server
const [userdata,setuser]=useState({});
//form handler function

const [val,setval]=useState({});

const handleform_login=(e)=>{
  console.log(userdata);
  postdatatoserver(userdata);
  e.preventDefault();
 
 
};

const postdatatoserver=(data)=>{
  axios.post(`${base_url}/validate` ,data).then(
    (response)=>{
        console.log(response);
        console.log("success");

        let res =  response.data;
        localStorage.setItem('user',response.data.username);

        localStorage.setItem('id',response.data.id);
        const myJSON = JSON.stringify(res.role);
        console.log(res.role);
       // console.log(res.role=="STUDENT");
        if(res.role=="STUDENT"){
          window.location.href = '/Home' 
        }
        if(res.role=="ALUMNI"){
          window.location.href = '/AlumniHomePage' 
        }
        // console.log(typeof(res.role))
        // if(res.role.localeCompare("ALUMNI")){
        //  student();
        // }
        // if(res.role=="Admin"){
        //   window.location.href = '/AdminHomePage' 
        // }


    },
    (error)=>{
        console.log(error);
        console.log("error");
    }
  )
};

const avatarStyle={backgroundColor:'#1bbd7e'}

    return (
    
<div>




                <Container className="text-center my-3"/>
      <Card>
        <CardBody >
        <Avatar style={avatarStyle}></Avatar>
        <img src="/iiitb_logo.jpg" className="img" style={{weight: 40 ,height:40}}/>
        <p className="text-center my-3" style={{color: "Blue"}}>
      
          Login to IIITB-Handshake. {' '}
        </p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
        <Row>
      <Col md={4}>


      <Form onSubmit={handleform_login}>
  
  <FormGroup>
    <Label for="username">
      User Name
    </Label>
    <Input
      id="username"
      name="username"
      placeholder="Type your Name"
      type="text"
      autoComplete="off"
      onChange={(e)=>{
        setuser({...userdata,username: e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Type your Password"
      type="password"
      onChange={(e)=>{
        setuser({...userdata,password: e.target.value})
      }}
    />
  </FormGroup>



  

      
      
    
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="select"
      name="select"
      type="select"
   
      onChange={(e)=>{
        setuser({...userdata,role: e.target.value})
      }}
      >
      <option value="N/A">Select</option>
      <option value="STUDENT">
        Student
      </option>
      <option value="ALUMNI">
        Alumni
      </option>
      <option value="ADMIN">
        Admin
      </option>
    </Input>
    
  </FormGroup>
  
  
  
 
  
  
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      You are not a robot
    </Label>
  </FormGroup>
<Row>
<Col>
<Button variant="contained" size="medium" >  Submit</Button>
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="/signup" className="btn btn-success" style={{marginTop:"10px"}} data-toggle="modal" data-target="#showmoreModal">Signup</a>


</Col>

</Row>

</Form>

      </Col>
    </Row>


        </CardBody>
      </Card>
    
      </div>)

      
    };
    
    export default Login;

    