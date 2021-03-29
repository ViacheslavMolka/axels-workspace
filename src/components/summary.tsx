import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import { SummaryProps } from '../types/types';
import { TopWrapper, Cards, WrapperListItems, BottomWrapper } from '../styled/index';


const SummaryCompoment = ({data}: SummaryProps) => {
    let subtotal: number = 0;
    
    const cards = data.map((item, idx) => {
        subtotal += item.price;
        return (
            <Cards key={idx}>
                <Card.Img src={item.image_url}/>
                <Card.Body>
                    <span className='card-title'>{item.title}</span>
                    <span>{item.color}</span>
                    <span>Quantity: 1</span>
                </Card.Body>
                <span className='card-title'>${item.price}</span>
            </Cards>
        )
    });

    const classNames = document.location.pathname === '/print/' ? 'order-opacity' : '';

    return (
        <>
            <div className={classNames}></div>
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
