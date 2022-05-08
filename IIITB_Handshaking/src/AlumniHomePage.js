import React from "react";
import { BrowserRouter, Routes,Route,Router} from 'react-router-dom';
import {Card, CardBody, Container, Input, ListGroup,ListGroupItem} from 'reactstrap';
import { Button } from 'reactstrap';
import { Row,Col } from "reactstrap";
import Sell from "./Sell";
import Donate from "./Donate";
import AvailableRooms from "./AvailableRooms";

function AlumniHomePage(){
    return(
        
            <div>
            <Container/>
            <Card>
    <CardBody className='bg-warning'>
    <h3 className="text-center my-3">
      Alumni Home Page{' '}
    </h3>
    </CardBody>
  </Card> 
            
            
<Row>
    <Col md={3}>
    <ListGroup>
             
             <ListGroupItem  href="/alumnihome" style={{backgroundColor: "pink"}} tag="a">
                 Home
             </ListGroupItem>
             <ListGroupItem  href="/sell" style={{backgroundColor: "pink"}} tag="a">
                 Sell
             </ListGroupItem>
             <ListGroupItem  href="/donate" style={{backgroundColor: "pink"}} tag="a">
                 Donate
             </ListGroupItem>
             <ListGroupItem  href="/availableRooms" style={{backgroundColor: "pink"}} tag="a">
                 Available Rooms
             </ListGroupItem>

         </ListGroup>
         </Col>
{/* <BrowserRouter> */}

    <Col md={9}>
    {/* <Routes>
  <Route path="/alumnihome" element={<AlumniHomePage />} />
  <Route path="/donate" element={<Donate />} />
  <Route path="/availableRooms" element={<AvailableRooms />} />
  <Route path="/sell" element={<Sell />} />
  
 
  </Routes> */}

    </Col>
{/* </BrowserRouter> */}
   
</Row>
           
            </div>

        
    )
}
export default AlumniHomePage;