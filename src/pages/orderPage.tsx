import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SummaryCompoment } from '../components/index';

import { loadData } from '../redux/ducks/orders';
import { RootState } from '../store/store';


const OrderPage = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.data);

    let subtotal = 0;
    value.forEach(item => {
        subtotal += item.price;
    })

    useEffect(() => {
        dispatch(loadData())
    }, [])

    return (
        <>
            {value && <SummaryCompoment subtotal={subtotal} data={value}/>}
        </>
    )
};

export default OrderPage;
