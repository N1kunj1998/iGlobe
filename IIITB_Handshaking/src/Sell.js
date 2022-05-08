import React from 'react';
import { Container, Form, Input, Row } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Card,CardBody } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import { Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import axios from "axios";
import base_url from './api/bootapi';
import './App.css';
import Button from '@mui/material/Button';



function notify(){ 
  toast("Product added succesfully!");
}
function Sell(){

  const [file,setfile]=useState({});
  const [donateId,setdonateId]=useState({});
  const [userdata,setuser]=useState({});

  const handleform_sell=(e)=>{
    console.log(userdata);
    postdatatoserver(userdata);
    e.preventDefault();
    notify();
    e.target.value=null
  };

  

  const postdatatoserver = async (data)=>{
    console.log(userdata)
    
    await axios.post(`${base_url}/sell/addItem` ,data).then(
      (response)=>{
          console.log(response);
          console.log("success");
        
          const data1 = new FormData();
          data1.append('file',file.selectedFile);
          console.warn(file.selectedFile);
          axios.post(`${base_url}/upload-file/s_`+response.data.sid , data1,{})
          .then(res => {
            console.warn(res);
          })
      },
      (error)=>{
          console.log(error);
          console.log("error");
      }
    )
    // sendImage();
  };


return(<div>
  <Container/>
  

 <Col > <StudentHomePage /></Col>
 
  <Col><Card className='text-center' variant="outlined">
    <CardBody>
    <h8 style={{color: "Blue"}} class="heading">
      Fill the details of item you want to Sell{' '}
    </h8>
    </CardBody>
  </Card></Col>

<Col>

<Card>

<CardBody>



    <Form onSubmit={handleform_sell}>
  <FormGroup>
   
     Product Name
   
    <Input
      id="product"
      name="email"
      placeholder="product"
      type="text"
      onfocus="this.value=''"
      onChange={(e)=>{
        setuser({...userdata,name: e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Details
    </Label>
    <Input
      id="detail"
      name="detail"
      placeholder="Condition of product"
      type="text"
       onfocus="this.value=''"
      onChange={(e)=>{
        setuser({...userdata,details: e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    

  </FormGroup>

 

  <FormGroup>
    <Label for="exampleText">
     Price
    </Label>
    <Input
      id="price"
      name="price"
       onfocus="this.value=''"
      type="text"
      onChange={(e)=>{
        setuser({...userdata,price: e.target.value})
      }}
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
       onfocus="this.value=''"
      name="file"
      type="file"
      onChange={(e)=>{
       
        setfile({...file, selectedFile: e.target.files[0],});
      }}
    />
   
 
  </FormGroup> 
  <Button variant="contained" size="medium" onClick={handleform_sell}>  Submit</Button>
  
</Form>
</CardBody>
</Card>
</Col>

</div>)
};

export default Sell;