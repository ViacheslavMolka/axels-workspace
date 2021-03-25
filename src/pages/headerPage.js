import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from '../components/index';

const HeaderPage = () => {
    const number = useSelector(state => state.data.length);
    return (
        <>
            {number && <Header number={number}/>}
        </>
    )
};

export default HeaderPage;
