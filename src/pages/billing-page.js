import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import CountrySelector from '../country-selector';
import { Link } from 'react-router-dom';

const BillingPage = () => {
    return(
        <>
            <div className='wrapper-for-title'>
                <label className='shipping-info'>Billing Information</label>
                <a href='/#'>Same as shipping</a>
            </div>
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
}

export default BillingPage;