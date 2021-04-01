import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PaymentComponent from '../components/payment';


configure({ adapter: new Adapter() });

it('PaymentComponent snapshot', () => {
    const component = shallow(<PaymentComponent />);
    expect(component).toMatchSnapshot();
});