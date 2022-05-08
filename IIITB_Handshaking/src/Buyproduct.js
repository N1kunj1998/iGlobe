
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
    
} from "reactstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import base_url from "./api/bootapi";

// let buyproductid=sid;
function buynow(){ 

  window.location.href = '/buynow' ;


}

var Buffer =require("buffer/").Buffer
const Buyproduct = ({product1}) => {

   
   
        const [base64, setBase64] = useState();

        useEffect(() => {
            getimageFromServer();
        });

        const getimageFromServer=()=>{
            axios.get(`${base_url}/getImage/`+product1.image ,{
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
      
    

return(

<div>

{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

  <Card style={{width:"400px", height:"550px"}}>
    <CardImg
      alt="Card image cap"
      src={`data:image/jpeg;charset=utf-8;base64,${base64}`}
      top
      width="400px"
      height="400px"
    />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <CardBody>
      <CardTitle tag="h5">
      {product1.name}
      </CardTitle>

      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      > 
         <h6>Price :</h6>{product1.price}
      </CardSubtitle>
      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      <CardText>
         {product1.details}
      </CardText>

      <Button variant="contained" size="medium" onClick={buynow}   >
        Buy Now
        {localStorage.setItem('sid',product1.sid)}
      </Button>
    </CardBody>
  </Card>




</div>
)
}



export default Buyproduct