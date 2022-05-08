import React from 'react';
import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Container,
    Button,
} from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "./api/bootapi";


var Buffer =require("buffer/").Buffer

const Room = ({room}) => {

    const [base64, setBase64] = useState();

    useEffect(() => {
        getimageFromServer();
    });

    const getimageFromServer=()=>{
        axios.get(`${base_url}/getImage/`+room.image ,{
            responseType: "arraybuffer",
          }).then(
            (response)=>{
                    console.log(response);
                    // toast.success("rooms");
                
                    setBase64(Buffer.from(response.data, "binary").toString("base64"))
                    console.log(base64);
            },
            (error)=>{
                    console.log(error);
            }
        )        


        };



  return (

    <div>

<Row>


<Col>
        <Card className='text-center' >
            <CardBody>
                


                
                {/* <CardSubtitle className='font-weight-bold'>{room.roomIdx} </CardSubtitle> */}
                <Row>
                    <Col>Address</Col>
                
                <Col>
                <CardSubtitle 
                 className='font-weight-bold'>{room.address}</CardSubtitle>
                </Col>
                
                    </Row>


                    <Row>
                        <Col>Rent</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{room.cost}</CardSubtitle></Col>
                   

                    </Row>
              
               
            </CardBody>
        </Card>


        <Card style={{width:"400px", height:"550px"}}>
    <CardImg
      alt="Card image cap"
      src={`data:image/jpeg;charset=utf-8;base64,${base64}`}
      top
      width="400px"
      height="400px"
    />
    </Card>

        </Col>
        </Row>
    </div>
  )
}

export default Room;