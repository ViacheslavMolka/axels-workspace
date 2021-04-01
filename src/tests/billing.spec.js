import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import BillingComponent from '../components/billing';


describe('Billing component', () => {
    it('Billing snapshot', () => {
        const component = renderer.create(<Router><BillingComponent/></Router>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
