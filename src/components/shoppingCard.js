import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { Breadcrumbs, ShippingComponent, PaymentComponent, BillingComponent, PrintOrder } from './index';
import OrderPage from '../pages/orderPage';

import { RouteWrapper } from '../styled/index';


const ShoppingCard = () => (
    <Router>
        <Row>
            <Col sm={4}>
                <Breadcrumbs/>                  
                <RouteWrapper>
                    <Route path='/shipping/' component={ShippingComponent}/>
                    <Route path='/billing/' component={BillingComponent}/>
                    <Route path='/payment/' component={PaymentComponent}/>
                    <Route path='/print/' component={PrintOrder}/>
                </RouteWrapper>                       
            </Col>                   
            <Col sm={3}>
                <OrderPage/>
            </Col>
        </Row>          
    </Router>  
);

export default ShoppingCard;
