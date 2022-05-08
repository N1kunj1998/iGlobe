import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import base_url from "./api/bootapi";




var Buffer =require("buffer/").Buffer
const Getimage = () => {
    const [base64, setBase64] = useState();
    const getimageFromServer=()=>{
        axios.get(`${base_url}/getDonateImage`,{
            responseType: "arraybuffer",
          }).then(
            (response)=>{
                    console.log(response);
                    toast.success("rooms");
                    // setimageDetails(response.data);
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
        <img src={`data:image/jpeg;charset=utf-8;base64,${base64}`} height={'50'}/>
    <Button onClick={getimageFromServer}>Click Me</Button>
    </div>
  )
}

export default Getimage

