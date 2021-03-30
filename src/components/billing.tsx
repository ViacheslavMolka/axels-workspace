import React, { useState } from 'react';
import { Button, InputGroup, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
import { CountryDropdown } from 'react-country-region-selector';
import { Formik, Form } from 'formik';
import { RecordCircleFill } from 'react-bootstrap-icons';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import { BillingSchema } from '../validation/validationSchemes';

import { ICountry, BillingInitialValues } from './types';
import { MainTitle, BillingTitle, CountryGroup } from '../styled/index';


const BillingComponent = ({history}: RouteComponentProps) => { 
    const [ country, setCountry ] = useState<ICountry>({ val: '' });

    const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
            <span className='pop'>Please enter recipient full name</span>
          </Popover.Content>
        </Popover>
    );

    const saveFormBilling = (a: BillingInitialValues) => {
        a.country = country.val;
        localStorage.setItem('formBillingData', JSON.stringify(a));
        return history.push('payment/');
    };

    const initialValues: BillingInitialValues = {
        fullname: '',
        email: '',
        address: '',
        apt: '',
        city: '',
        country: '',
        zip: ''
    };
    return (
        <>
            <BillingTitle>
                <MainTitle>Billing Information</MainTitle>
                <a className='billing-link' href='/#'>Same as shipping</a>
            </BillingTitle>
            <label>Billing Contact</label>

            <Formik
                initialValues={initialValues}
                validateOnBlur
                validationSchema={BillingSchema}
                onSubmit={values => saveFormBilling(values)}
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
                            type='submit' 
                            variant="primary">
                        Continue</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
};

export default withRouter(BillingComponent);
