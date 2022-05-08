import axios from 'axios';
import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import base_url from './api/bootapi';
import { toast } from 'react-toastify';
import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import Room from './Room';
function FindRooms(){


     useEffect(()=>{
         document.title="find rooms";
     },[])
     useEffect(()=>{
            getAllRoomsFromServer();
     },[])

     
     const [rooms,setroomsDetails]=useState([

     ]);
    //function to get available rooms from server
    const getAllRoomsFromServer=()=>{
            axios.get(`${base_url}/getRooms`).then(
                (response)=>{
                        console.log(response);
                        toast.success("rooms");
                        setroomsDetails(response.data);
                      
                },
                (error)=>{
                        console.log(error);
                }
            )        
    };
    return(
        <div>


<Col > <StudentHomePage /></Col>
<Col><h5 >Available Room</h5></Col>

<Col >

      
                {
                        rooms.length>0
                        ? rooms.map((item)=><Room room={item} />)
                        :"No rooms"}

</Col>

                
        </div>
    )
        };

export default FindRooms;