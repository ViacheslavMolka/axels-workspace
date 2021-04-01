import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';


configure({ adapter: new Adapter() });

it('App snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
});