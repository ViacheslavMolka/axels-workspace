import React from 'react';
import { Button, InputGroup, FormControl, Form, Col } from 'react-bootstrap';

const PaymentPage = () => {
    const imageLock =   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 
                            2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                        </svg>
    return(
        <> 
            <div className='wrapp-for-payment'>
                <label className='payment-info'>Payment</label>
                <p>{imageLock} This is secure 128-bit SSL encrypted payment</p>
            </div>            

            <label>Cardholder Name</label>
            <InputGroup className="mb-3">
                <FormControl placeholder="Name as it appears on your card"/>
            </InputGroup>

            <label>Card Number</label>    
            <InputGroup className="mb-3">
                <FormControl
                type='number'
                placeholder="XXXX XXXX XXXX XXXX XXXX"/>      
            </InputGroup>

            <Form>
                <Form.Row>
                    <Col className='expire-date'>
                        <label>Expire Date</label>
                        <Form.Control placeholder="MM / YY" />
                    </Col>
                    <Col className='security-code'>
                        <label>Security Code</label>
                        <Form.Control/>
                    </Col>
                </Form.Row>
            </Form>

            <Button className='pay-btn' variant="primary">Pay Securely</Button>
        </>
    )
}

export default PaymentPage;