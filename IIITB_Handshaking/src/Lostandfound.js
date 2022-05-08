import React  from "react";
import { Container } from "reactstrap";
import { Button ,Input,FormGroup,Form} from 'reactstrap';
import {Card,CardBody} from 'reactstrap';
import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import base_url from "./api/bootapi";
import axios from "axios";
import { useState } from "react";



function Lostandfound(){
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
<Col >
<a href="/found" className="btn btn-success" style={{marginTop:"10px"}} data-toggle="modal" data-target="#showmoreModal">Found</a>
<p>List of the items that has been found.. please collect the items from reception</p>
</Col>

</div>)
};

export default Lostandfound;
