import React  from "react";
import { Container } from "reactstrap";
import { Button ,Input,FormGroup,Form} from 'reactstrap';
import {Card,CardBody} from 'reactstrap';
import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import base_url from "./api/bootapi";
import axios from "axios";
import { useState } from "react";
import LostthingsShow
 from "./LostthingShow";
 import LostProduct from "./LostProduct";


function Lostandfound(){


  const [userdata,setuser]=useState({});
  const handleform_donate=(e)=>{
  
    postdatatoserver(userdata);
    e.preventDefault();
  
   
  
  };
  const postdatatoserver = async (data)=>{
    console.log(userdata)
    
    await axios.post(`${base_url}/lost/addItem` ,data).then(
      (response)=>{
          console.log(response);
          console.log("success");
      
        
      },
      (error)=>{
          console.log(error);
          console.log("error");
      }
    )
   
  };


return(<div>
    <Container/>
   
  


<Col> <StudentHomePage /></Col>
<Col>
<CardBody>
     <Card className="text-center">
     <h8 className="text-center" style={{color: "Blue"}}  >
      Lost and Found{' '}
    </h8>

     </Card>
     
   </CardBody>
</Col>

<Form onSubmit={handleform_donate}>
  <FormGroup>
   
     Found Product Name
   
    <Input
      id="product"
      name="email"
      placeholder="product"
      type="text"
      onfocus="this.value=''"
      onChange={(e)=>{
        setuser({...userdata,productname: e.target.value})
      }}
    />
    </FormGroup>
    <Button variant="contained" size="medium" onClick={handleform_donate}>  Submit</Button>
    </Form>




<Col >

<p>List of the items that has been found.. please collect the items from reception</p>
</Col>
<Card>
  <LostthingsShow />
</Card>


</div>)
};

export default Lostandfound;