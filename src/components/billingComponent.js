import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import CountrySelector from './countrySelector';
import { Link } from 'react-router-dom';
import { MainTitle } from '../styled/shoppingCardStyles';
import { BillingTitle } from '../styled/billingStyles';

const BillingComponent = () => (
    <>
        <BillingTitle>
            <MainTitle>Billing Information</MainTitle>
            <a href='/#'>Same as shipping</a>
        </BillingTitle>
        <label>Billing Contact</label>

        <InputGroup className="mb-3">
            <FormControl placeholder="Full Name"/>
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl
            type='email'
            placeholder="Email Address"/>
        </InputGroup>

        <label>Billing Address</label>

        <InputGroup className="mb-3">
            <FormControl placeholder="Street Address" />
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl placeholder="City"/>
        </InputGroup>

        <CountrySelector/>    

        <Link to='/payment/'><Button variant="primary">Continue</Button></Link>
    </>
)

export default BillingComponent;