import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import icon from '../img/client-img.png';
import { TopWrapper, Cards, WrapperListItems, BottomWrapper } from '../styled/summatyStyles';

const SummaryCompoment = () => (
    <>
        <div>
            <TopWrapper>
                <label>Order Summary</label>
                <a href='/#'>edit order</a>
            </TopWrapper>    

            <Cards>
                <Card.Img style={{ width: '3rem', height: '3rem' }} src={icon} />
                <Card.Body>
                    <span className='card-title'>Card Title</span>
                    <span>Black</span>
                    <span>Quantity: 1</span>
                </Card.Body>
                <span className='card-title'>$250</span>
            </Cards>

            <Cards>
                <Card.Img style={{ width: '3rem', height: '3rem' }} src={icon} />
                <Card.Body>
                    <span className='card-title'>Card Title</span>
                    <span>Black</span>
                    <span>Quantity: 1</span>
                </Card.Body>
                <span className='card-title'>$250</span>
            </Cards>

            <Cards>
                <Card.Img style={{ width: '3rem', height: '3rem' }} src={icon} />
                <Card.Body>
                    <span className='card-title'>Card Title</span>
                    <span>Black</span>
                    <span>Quantity: 1</span>
                </Card.Body>
                <span className='card-title'>$250</span>
            </Cards>    
                            
            <WrapperListItems>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item>$122</ListGroup.Item>
                    <ListGroup.Item>$200</ListGroup.Item>
                    <ListGroup.Item>$85</ListGroup.Item>
                </ListGroup>
            </WrapperListItems>
        </div>

        <BottomWrapper>
            <div className='total-price'>
                <label>Total</label>
                <label>$407</label>
            </div>

            <div className='footer-text'>All purchases are subject to our Terms and Conditions</div>
        </BottomWrapper>
    </>
);

export default SummaryCompoment;