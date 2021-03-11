import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

const ShoppingCard = () => {
    return(
        <div>
            <h3>Shipping info</h3>
            <label htmlFor="basic-url">Recipient</label>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Full Name"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                placeholder="Daytime Phone"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>

            <label htmlFor="basic-url">Address</label>
            <InputGroup className="mb-3">
                <FormControl placeholder="Street Address" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl placeholder="Apt, Suite, Bldg, Gate Code. (optional)" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl placeholder="City" />
                <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>

            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>With textarea</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
        </div>
    )
}

export default ShoppingCard;