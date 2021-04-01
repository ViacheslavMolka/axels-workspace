import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/header';


configure({ adapter: new Adapter() });

it('Header snapshot', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
});