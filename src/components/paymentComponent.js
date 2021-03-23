import React from 'react';
import { Button, InputGroup, FormControl, Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { Lock } from 'react-bootstrap-icons';

import { PaymentSchema } from '../validation/validationSchemes';

import { PaymentWrapper } from '../styled/paymentStyles';

const PaymentComponent = () => {
    console.log(localStorage.formBillingData)

    const slashDate = (a) => {
        a.toString()
        const arr = a.split('');
        const arr1 = [];
        arr1.push(arr[0], arr[1], ' / ', arr[2], arr[3]);
        return arr1.join("");
    }
    return (
        <> 
            <PaymentWrapper>
                <label className='payment-info'>Payment</label>
                <p><Lock size={18}/> This is secure 128-bit SSL encrypted payment</p>
            </PaymentWrapper>     

             <Formik
                initialValues={{
                    fullname: '',
                    number: '',
                    date: '',
                    code: ''
                }}
                validateOnBlur
                validationSchema={PaymentSchema}
                onSubmit={values => console.log(values)}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                    dirty
                }) => (
                    <Form onSubmit={handleSubmit}>                        
                        <label>Cardholder Name</label>
                        <InputGroup className="mb-3">
                            <FormControl 
                                name='fullname'
                                value={values.fullname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Name as it appears on your card"/>
                        </InputGroup>

                        <label>Card Number</label>    
                        <InputGroup className="mb-3">
                            <FormControl      
                                maxLength={19}                      
                                name='number'
                                value={values.number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="XXXX XXXX XXXX XXXX"/>      
                        </InputGroup>

                        <>
                            <Form.Row>
                                <Col className='expire-date'>
                                    <label>Expire Date</label>
                                    <Form.Control
                                        name='date'                                        
                                        value={values.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur} 
                                        type='number'
                                        placeholder="MM / YY" />
                                </Col>
                                <Col className='security-code'>
                                    <label>Security Code</label>
                                    <Form.Control                                       
                                        name='code'
                                        value={values.code}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type='number'/>
                                </Col>
                            </Form.Row>
                        </>
                        
                        <Button 
                            className='pay-btn'
                            disabled={!isValid}
                            type='submit' 
                            variant="primary">
                        Pay Securely</Button>
                    </Form>
                )}
            </Formik>       

            {/* <label>Cardholder Name</label>
            <InputGroup className="mb-3">
                <FormControl placeholder="Name as it appears on your card"/>
            </InputGroup>

            <label>Card Number</label>    
            <InputGroup className="mb-3">
                <FormControl
                type='number'
                placeholder="XXXX XXXX XXXX XXXX"/>      
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

            <Button className='pay-btn' variant="primary">Pay Securely</Button> */}
        </>
    )
}

export default PaymentComponent;