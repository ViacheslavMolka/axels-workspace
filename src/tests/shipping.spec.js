import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import ShippingComponent from '../components/shipping';


describe('ShippingComponent component', () => {
    it('ShippingComponent snapshot', () => {
        const component = renderer.create(<Router><ShippingComponent/></Router>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
