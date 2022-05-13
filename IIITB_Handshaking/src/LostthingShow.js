import axios from 'axios';
import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import base_url from './api/bootapi';
import { toast } from 'react-toastify';
import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import LostProduct from './LostProduct';
import Donateproduct from './Donateproduct';
import {
    CardGroup,Card
} from "reactstrap";
function LostthingsShow(){

     useEffect(()=>{
         document.title="Products";
     },[])
     useEffect(()=>{
            getAllProductFromServer();
     },[])

     
     const [product1,setproductsDetails]=useState([

     ]);
    //function to get available rooms from server
    const getAllProductFromServer=()=>{
            axios.get(`${base_url}/getLostProducts`).then(
                (response)=>{
                        console.log(response);
                        // toast.success("Products");
                        setproductsDetails(response.data);
                      
                },
                (error)=>{
                        console.log(error);
                }
            )      


             

    };
    return(
        <div>



<Col><h5 className='center'>These things are found</h5></Col>
<Col >
<CardGroup>

                {
                        product1.length>0
                        ? product1.map((item)=><LostProduct product1={item} />)
                        :"No products"
                        
                        
                        
                        }
               
</CardGroup>
</Col>

                
        </div>
    )
        };

export default LostthingsShow;