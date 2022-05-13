import React from 'react';
import { Container, Form, Input, Row } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import {Card,CardBody} from 'reactstrap';
import Buy from './Buy';
import { useState } from 'react';
import axios from "axios";
import base_url from './api/bootapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import Button from '@mui/material/Button';
import DonateShow from './DonateShow';

function notify(){ 
  toast("Product added succesfully!");
}

function Donate(){

  const [file,setfile]=useState({});
  const [donateId,setdonateId]=useState({});
  const [userdata,setuser]=useState({});

  
  const handleform_donate=(e)=>{
  
    postdatatoserver(userdata);
    e.preventDefault();
    notify();
   
  
  };

  const  postdatatoserver= async (data)=>{
    console.log(userdata)
    await axios.post(`${base_url}/donate/addItem` ,data).then(
      (response)=>{
          console.log(response);
          console.log("success");
          // setdonateId({...donateId,id:response.data.donateId});
          // console.log(donateId.id);
          const data1 = new FormData();
          data1.append('file',file.selectedFile);
          console.warn(file.selectedFile);
          axios.post(`${base_url}/upload-file/d_`+ response.data.donateId, data1,{})
          .then(res => {
            console.warn(res);
          })
      },
      (error)=>{
          console.log(error);
          console.log("error");
      }
    )
    
  };


return(<div>
  <Container/>
  <Col > <StudentHomePage /></Col>
  <br></br>
 
  
<Card>
  <CardBody>



  
  <Col>
  
  <Card className="text-center">
    <CardBody >
    <h8 style={{color: "Blue"} }  >
      Fill the details of item you want to donate{' '}
    </h8>
    </CardBody>
  </Card>
  </Col>
  <Col>
  <Form onSubmit={handleform_donate}>
  <FormGroup>
    
     Product Name
    
    <Input
      id="product"
      name="product"
      placeholder="Enter product name"
      type="text"
      onChange={(e)=>{
        setuser({...userdata,productname: e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
   
      Details
   
    <Input
      id="detail"
      name="detail"
      placeholder="Condition of product"
      type="text"
      onChange={(e)=>{
        setuser({...userdata,details: e.target.value})
      }}
    />
  </FormGroup>
 
    

 
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
      onChange={(e)=>{
        // setuser({...userdata,image: e.target.value});
        setfile({...file, selectedFile: e.target.files[0],});
      }}
    />
   
 
  </FormGroup> 
  <Button variant="contained" size="medium" onClick={handleform_donate}>  Submit</Button>
</Form>
</Col>

  </CardBody>
</Card>

<Card>
  <DonateShow />
</Card>


    
</div>)
};

export default Donate;