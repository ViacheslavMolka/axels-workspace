import React, { useState } from 'react';
import { Button, InputGroup, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
import { CountryDropdown } from 'react-country-region-selector';
import { Formik, Form } from 'formik';
import { RecordCircleFill } from 'react-bootstrap-icons';

import { BillingSchema } from '../validation/validationSchemes';

import { MainTitle } from '../styled/shoppingCardStyles';
import { BillingTitle } from '../styled/billingStyles';
import { CountryGroup } from '../styled/countryStyles';


const BillingComponent = () => {
    const [ country, setCountry ] = useState({ val: '' });

    const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
            <span style={{color: 'red'}}>Please enter recipient full name</span>
          </Popover.Content>
        </Popover>
    );

    return (
        <>
            <BillingTitle>
                <MainTitle>Billing Information</MainTitle>
                <a className='billing-link' href='/#'>Same as shipping</a>
            </BillingTitle>
            <label>Billing Contact</label>

            <Formik
                initialValues={{
                    fullname: '',
                    email: '',
                    address: '',
                    apt: '',
                    city: '',
                    country: '',
                    zip: ''
                }}
                validateOnBlur
                validationSchema={BillingSchema}
                onSubmit={values => {
                    values.country = country.val;
                    return localStorage.setItem('formBillingData', JSON.stringify(values));
                }}
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

                        <InputGroup className="mb-3">
                            <OverlayTrigger show={errors.fullname ? true : false} placement="top" overlay={popover}>
                            <FormControl 
                                className={errors.fullname && 'error'}
                                name='fullname'
                                value={values.fullname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Full Name"/>
                            </OverlayTrigger>    
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl
                                className={errors.email && 'error'}
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type='email'
                                placeholder="Email Address"/>
                        </InputGroup>

                        <label>Billing Address</label>

                        <InputGroup className="mb-3">
                            <FormControl 
                                className={errors.address && 'error'}
                                name='address'
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Street Address" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl 
                                name='apt'
                                value={values.apt}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl 
                                className={errors.city ? 'city error' : 'city'}
                                name='city'
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="City"/>
                            <RecordCircleFill color={values.city ? '#cfcfcf' : '#7f00ad'}/>
                        </InputGroup>

                        <CountryGroup>
                            <CountryDropdown
                                name='country'
                                classes='country-dropdown'
                                defaultOptionLabel='Country'
                                onBlur={handleBlur}
                                value={country.val}
                                onChange={(item) => setCountry({ val: item })} 
                                />
                            <InputGroup>
                                <FormControl 
                                    className={errors.zip && 'error'}
                                    name='zip'
                                    value={values.zip}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='number' 
                                    placeholder="ZIP"/>
                            </InputGroup>     
                        </CountryGroup>

                            <Button 
                                disabled={!isValid || country.val === '' || !dirty}
                                onClick={() => {document.location = '/payment/'}}
                                type='submit' 
                                variant="primary">
                            Continue</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default BillingComponent;