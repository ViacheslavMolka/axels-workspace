import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShippingComponent from '../components/shipping';


configure({ adapter: new Adapter() });

it('ShippingComponent snapshot', () => {
    const component = shallow(<ShippingComponent />);
    expect(component).toMatchSnapshot();
});
