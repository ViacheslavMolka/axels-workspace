import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { Breadcrumbs, ShippingComponent, PaymentComponent, BillingComponent } from './index';
import OrderPage from '../pages/orderPage';

import { RouteWrapper } from '../styled/index';


const ShoppingCard = () => (
    <Router>
        <Row>
            <Col sm={4}>
                <Breadcrumbs/>                  
                <RouteWrapper>
                    <Route path='/shipping/' component={ShippingComponent} exact/>
                    <Route path='/billing/' component={BillingComponent} exact/>
                    <Route path='/payment/' component={PaymentComponent} exact/>
                </RouteWrapper>                       
            </Col>                   
            <Col sm={3}>
                <OrderPage/>
            </Col>
        </Row>          
    </Router>  
);

export default ShoppingCard;
