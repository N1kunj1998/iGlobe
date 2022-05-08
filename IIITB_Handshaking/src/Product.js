import React from 'react';
import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Container,
    Button,
} from "reactstrap";

const Product = ({product}) => {
  return (

    <div>

<Row>


<Col>
        <Card className='text-center'  >
            <CardBody>
               
             
                <Row>
                    <Col>Product Name</Col>
                
                <Col>
                <CardSubtitle 
                 className='font-weight-bold'>{product.productname}</CardSubtitle>
                </Col>
                
                    </Row>


                    <Row>
                        <Col>Product Details</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{product.details}</CardSubtitle></Col>
                   

                    </Row>

                    <Row>
                        <Col>Pictures</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{product.details}</CardSubtitle></Col>
                   

                    </Row>
              
               
            </CardBody>
        </Card>
        </Col>
        </Row>
    </div>
  )
}

export default Product;