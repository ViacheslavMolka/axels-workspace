import React from 'react';
import { Button, InputGroup, FormControl, Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { Lock } from 'react-bootstrap-icons';

import { PaymentSchema } from '../validation/validationSchemes';

import { PaymentWrapper } from '../styled/paymentStyles';

const PaymentComponent = () => {
    
    const allFormData = {
        shipping: JSON.parse(localStorage.formShippingData),
        billing: JSON.parse(localStorage.formBillingData)
    }
    // console.log(allFormData.billing, allFormData.shipping)

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
            onSubmit={values => console.log(allFormData.billing, allFormData.shipping, values)}
        >
            {({
                values,
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
                            type='text'
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
                            value={values.number.replace(/\s/g, '').replace(/(\w{4})/g, '$1 ').trim()}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="XXXX XXXX XXXX XXXX"/>      
                    </InputGroup>

                    <>
                        <Form.Row>
                            <Col className='expire-date'>
                                <label>Expire Date</label>
                                <Form.Control
                                    maxLength={7}
                                    name='date'                                        
                                    value={values.date.replace(/^(\w{2})(\w{2})/, '$1 / $2')}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
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
                        disabled={!isValid || !dirty}
                        type='submit' 
                        variant="primary">
                    Pay Securely</Button>
                </Form>
            )}
        </Formik>       
    </>
    )
}

export default PaymentComponent;