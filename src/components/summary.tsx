import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { OrdersCard } from './index';

import { SummaryProps } from './types';
import { TopWrapper, WrapperListItems, BottomWrapper } from '../styled/index';


const SummaryCompoment = ({data, subtotal}: SummaryProps) => {
    const url = useLocation();
    const classNames = url.pathname === '/shipping/billing/payment/print/' ? 'order-opacity' : '';
    
    return (
        <>
            <div className={classNames}></div>
            <div>
                <TopWrapper>
                    <label>Order Summary</label>
                    <a href='/#'>edit order</a>
                </TopWrapper>    

                <OrdersCard data={data}/>
                                
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
