import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Breadcrumbs from '../components/breadcrumbs';


configure({ adapter: new Adapter() });

it('Breadcrumbs snapshot', () => {
    const component = shallow(<Breadcrumbs />);
    expect(component).toMatchSnapshot();
});