import React from "react";
import { Container } from "reactstrap";
import { Card,CardBody } from "reactstrap";
import { Row,Col } from 'reactstrap';
import StudentHomePage from './StudentHomePage';


import SimpleImageSlider from "react-simple-image-slider";
function Home(){


  const images = [
    { url: "i4.jpg" },
    { url: "i6.jpg" },
    { url: "i2.jpg" },
    { url: "i3.jpg" },
    { url: "i1.jpg" },
    { url: "i5.jpg" },
    // { url: "images/7.jpg" },
  ];
  
  // const App = () => {
  //   return (
 
  //   );
  // }


  console.log(localStorage.getItem('user'));
return (<div>
     

    <Container/>
  

  <Col> <StudentHomePage /></Col>
  <Col>
  <Card>
    <CardBody >
    <p className="text-center my-3">
      IIITB-Handshaking is a platform which helps all the students in campus of IIITB to connect and react to each other. {' '}
    </p>
    </CardBody>
  </Card>
  </Col>
  <Col>
  
  <div className="centered-div">
    <center>

    <SimpleImageSlider autoPlay
          width='80%'
          height='80%'
          images={images}
          showBullets={true}
          showNavs={true}
        />
    </center>
        
      </div>
  
  </Col>


</div>)
};

export default Home;
