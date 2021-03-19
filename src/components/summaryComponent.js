import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import icon from '../img/client-img.png';
import { TopWrapper, Cards, WrapperListItems, BottomWrapper } from '../styled/summatyStyles';

const SummaryCompoment = ({data}) => {
    let subtotal = 0;
    let cards = data.map((item, idx) => {
        subtotal += item.price;
        return(
            <Cards key={idx}>
                <Card.Img style={{ width: '3rem', height: '3rem' }} src={item.image_url}/>
                <Card.Body>
                    <span className='card-title'>{item.title}</span>
                    <span>{item.color}</span>
                    <span>Quantity: 1</span>
                </Card.Body>
                <span className='card-title'>${item.price}</span>
            </Cards>
        )
    })
    
    console.log(subtotal)

    return (
        <>
            <div>
                <TopWrapper>
                    <label>Order Summary</label>
                    <a href='/#'>edit order</a>
                </TopWrapper>    

                {cards}
                                
                <WrapperListItems>
                    <ListGroup>
                        <ListGroup.Item>Subtotal</ListGroup.Item>
                        <ListGroup.Item>Shipping</ListGroup.Item>
                        <ListGroup.Item>Taxes</ListGroup.Item>
                    </ListGroup>

                    <ListGroup>
                        <ListGroup.Item>${subtotal}</ListGroup.Item>
                        <ListGroup.Item>Free</ListGroup.Item>
                        <ListGroup.Item>$10</ListGroup.Item>
                    </ListGroup>
                </WrapperListItems>
            </div>

            <BottomWrapper className='bottom-wrapp'>
                <div className='total-price'>
                    <label>Total</label>
                    <label>${subtotal + 10}</label>
                </div>

                <div className='footer-text'>All purchases are subject to our Terms and Conditions</div>
            </BottomWrapper>
        </>
    )
};

export default SummaryCompoment;