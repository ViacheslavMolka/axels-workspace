import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OrdersCard from '../components/ordersCard';


configure({ adapter: new Adapter() });

it('OrdersCard snapshot', () => {
    const data = [{
        image_url: '',
        title: '',
        price: 30,
        color: ''
    }];
    const component = shallow(<OrdersCard data={data}/>);
    expect(component).toMatchSnapshot();
});