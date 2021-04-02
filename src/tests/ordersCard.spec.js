import React from 'react';
import renderer from 'react-test-renderer';

import OrdersCard from '../components/ordersCard';


describe('OrdersCard component', () => {
    it('OrdersCard snapshot', () => {
        const data = [{
            image_url: 'https://source.unsplash.com/u94ywFnPedw',
            title: 'The Chelsea Boot',
            price: 30,
            color: 'Black'
        }];
        const component = renderer.create(<OrdersCard data={data}/>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
