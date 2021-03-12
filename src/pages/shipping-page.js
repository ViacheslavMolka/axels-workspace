import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import CountrySelector from '../country-selector';

const ShippingPage = () => {
    return(
        <>
            <label className='shipping-info'>Shipping Info</label>
            <label>Recipient</label>

            <InputGroup className="mb-3">
                <FormControl placeholder="Full Name"/>
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                type='number'
                placeholder="Daytime Phone"/>
                <InputGroup.Append>
                    <p>For delivery<br/> questions only</p>
                </InputGroup.Append>
            </InputGroup>

            <label>Address</label>

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

            <Button variant="primary">Continue</Button>
        </>
    )
}

export default ShippingPage;