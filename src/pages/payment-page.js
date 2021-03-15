import React from 'react';
import { Button, InputGroup, FormControl, Form, Col } from 'react-bootstrap';
import { Lock } from 'react-bootstrap-icons';

const PaymentPage = () => {
    return(
        <> 
            <div className='wrapp-for-payment'>
                <label className='payment-info'>Payment</label>
                <p><Lock size={18}/> This is secure 128-bit SSL encrypted payment</p>
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