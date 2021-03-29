import React, { useState } from 'react';
import { Button, InputGroup, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';
import { RecordCircleFill } from 'react-bootstrap-icons';

import { ShippingSchema } from '../validation/validationSchemes';

import { ShippingInitialValues, ICountry } from './types';
import { MainTitle, InputWrapper, CountryGroup } from '../styled/index';


const ShippingComponent = () => {
    const [ country, setCountry ] = useState<ICountry>({ val: '' });

    const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
            <span className='pop'>Please enter recipient full name</span>
          </Popover.Content>
        </Popover>
    );
    
    const saveFormShipping = (a: ShippingInitialValues) => {
        a.country = country.val;
        return localStorage.setItem('formShippingData', JSON.stringify(a));
    };

    const initialValues: ShippingInitialValues = {
        fullname: '',
        phone: '',
        address: '',
        apt: '',
        city: '',
        country: '',
        zip: ''
    };
    return (
        <InputWrapper>
            <MainTitle>Shipping Info</MainTitle>
            <label>Recipient</label>

            <Formik
                initialValues={initialValues}
                validateOnBlur
                validationSchema={ShippingSchema}
                onSubmit={values => saveFormShipping(values)}
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
                                className={errors.phone && 'error'}
                                name='phone'
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type='number'
                                placeholder="Daytime Phone"/>
                            <InputGroup.Append>
                                <p>For delivery<br/> questions only</p>
                            </InputGroup.Append>
                        </InputGroup>

                        <label>Address</label>

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
                                onClick={() => {document.location.href = '/billing/'}}
                                type='submit' 
                                variant="primary">
                            Continue</Button>
                    </Form>
                )}
            </Formik>
        </InputWrapper>
    )
};

export default ShippingComponent;
