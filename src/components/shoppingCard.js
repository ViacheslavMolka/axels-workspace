import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ShippingComponent from './shippingComponent';
import BillingComponent from './billingComponent';
import PaymentComponent from './paymentComponent';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';
import { RouteWrapper } from '../styled/shoppingCardStyles';
import SummaryCompoment from './summaryComponent';


const ShoppingCard = () => (
    <Router>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Breadcrumbs/>                  
                        <RouteWrapper>
                            <Route path='/shipping/' component={ShippingComponent}/>
                            <Route path='/billing/' component={BillingComponent}/>
                            <Route path='/payment/' component={PaymentComponent}/>
                        </RouteWrapper>                       
                    </Col>                   
                    <Col sm={3}>
                        <SummaryCompoment/>
                    </Col>
                </Row>          
            </Container>
    </Router>  
);


export default ShoppingCard;