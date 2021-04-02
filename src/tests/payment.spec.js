import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import PaymentComponent from '../components/payment';


describe('PaymentComponent component', () => {
    it('PaymentComponent snapshot', () => {
        const component = renderer.create(<Router><PaymentComponent/></Router>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
