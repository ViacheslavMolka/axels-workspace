import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import BillingComponent from '../components/billing';


configure({ adapter: new Adapter() });

it('BillingComponent snapshot', () => {
    const component = shallow(<BillingComponent />);
    expect(component).toMatchSnapshot();
});
