import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import Inputs from './inputs';
import CardsGoods from './card-with-goods';

const ShoppingCard = () => {
    return (
        <div className='wrapp-for-card'>    
                <Row>
                    <Col xs={7}>
                        <Breadcrumb>
                            <Breadcrumb.Item active href="#" >Shipping</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" >Billing</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" >Payment</Breadcrumb.Item>
                        </Breadcrumb>
                        
                        <div className='wrapper-for-inputgroup'>
                            <Inputs/>
                        </div>                       
                    </Col>                   

                    <Col className='second-container'>
                        <CardsGoods/>
                    </Col>
                </Row>          
        </div>  
    )
}

export default ShoppingCard;