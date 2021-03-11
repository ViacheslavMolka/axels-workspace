import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';
import CountrySelector from './country-selector';

const ShoppingCard = () => {
    return (
        <div className='wrapp-for-card'>    
                <Row className='row'>
                    <Col xs={7} className='first-container'>
                        <h4>Shipping info</h4>
                        <label>Recipient</label>
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
                                <p>For delivery<br/> questions only</p>
                            </InputGroup.Append>
                        </InputGroup>

                        <label>Address</label>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Street Address" aria-describedby="basic-addon3" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl placeholder="Apt, Suite, Bldg, Gate Code. (optional)" aria-describedby="basic-addon3" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl placeholder="City" />
                        </InputGroup>

                        <CountrySelector/>    

                        <Button variant="primary">Continue</Button>                         
                      </Col>  
                    <Col className='second-container'>
                    123
                    </Col>
                </Row>          
        </div>  
    )
}

export default ShoppingCard;