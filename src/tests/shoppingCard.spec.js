import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShoppingCard from '../components/shoppingCard';


configure({ adapter: new Adapter() });

it('ShoppingCard snapshot', () => {
    const component = shallow(<ShoppingCard />);
    expect(component).toMatchSnapshot();
});