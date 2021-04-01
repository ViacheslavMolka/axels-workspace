import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PrintOrder from '../components/printOrder';


configure({ adapter: new Adapter() });

it('PrintOrder snapshot', () => {
    const component = shallow(<PrintOrder />);
    expect(component).toMatchSnapshot();
});