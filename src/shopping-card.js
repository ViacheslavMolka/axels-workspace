import React from 'react';
import { Button, Row, Col, Card, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import CountrySelector from './country-selector';
import icon from './css/client-img.png';

const ShoppingCard = () => {
    return (
        <div className='wrapp-for-card'>    
                <Row>
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
                        <div className='order'>
                            <label>Order Summary</label>
                            <a href='#'>edit order</a>
                        </div>
                        <Card>
                            <Card.Img style={{ width: '3rem', height: '3rem' }} src={icon} />
                            <Card.Body>
                                <span className='card-title'>Card Title</span>
                                <span>Black</span>
                                <span>Quantity: 1</span>
                            </Card.Body>
                            <span className='card-title'>$250</span>
                        </Card>
                        <Card>
                            <Card.Img style={{ width: '3rem', height: '3rem' }} src={icon} />
                            <Card.Body>
                                <span className='card-title'>Card Title</span>
                                <span>Black</span>
                                <span>Quantity: 1</span>
                            </Card.Body>
                            <span className='card-title'>$250</span>
                        </Card>
                        <Card>
                            <Card.Img style={{ width: '3rem', height: '3rem' }} src={icon} />
                            <Card.Body>
                                <span className='card-title'>Card Title</span>
                                <span>Black</span>
                                <span>Quantity: 1</span>
                            </Card.Body>
                            <span className='card-title'>$250</span>
                        </Card>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>          
        </div>  
    )
}

export default ShoppingCard;