import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from '../components/index';

import { RootState } from '../store/store';


const HeaderPage = () => {
    const number = useSelector((state: RootState) => state.data.length);
    return (
        <>
            {number && <Header number={number}/>}
        </>
    )
};

export default HeaderPage;
