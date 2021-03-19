import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../actions/actions';
import { SummaryCompoment } from '../components/index';

const OrderPage = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.data);

    useEffect(() => {
        dispatch(loadData())
    }, [])

    console.log(value);
    return (
        <>
            {value ? <SummaryCompoment data={value}/> : null}
        </>
    )
}

export default OrderPage;