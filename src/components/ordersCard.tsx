import React from 'react';
import { Card } from 'react-bootstrap';

import { Cards } from '../styled/index';

import { OrdersCardProps } from './types';


const OrdersCard = ({data}: OrdersCardProps) => {
    const cards = data.map((item, idx) => {
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
    return (
        <>
            {cards}
        </>
    )
};


export default OrdersCard;
