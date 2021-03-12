import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import ShippingPage from './pages/shipping-page';
import SummaryPage from './pages/summary-page';
import BillingPage from './pages/billing-page';
import PaymentPage from './pages/payment-page';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const ShoppingCard = () => {
    return (
        <Router>
            <div className='wrapp-for-card'>    
                <Row>
                    <Col xs={7}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/shipping/">Shipping</Breadcrumb.Item>
                            <Breadcrumb.Item href="/billing/">Billing</Breadcrumb.Item>
                            <Breadcrumb.Item href="/payment/">Payment</Breadcrumb.Item>
                        </Breadcrumb>
                        
                        <div className='wrapper-for-inputgroup'>
                            <Route path='/shipping/' component={ShippingPage}/>
                            <Route path='/billing/' component={BillingPage}/>
                            <Route path='/payment/' component={PaymentPage}/>
                        </div>                       
                    </Col>                   

                    <Col className='second-container'>
                        <SummaryPage/>
                    </Col>
                </Row>          
            </div>  
        </Router>  
    )
}

export default ShoppingCard;