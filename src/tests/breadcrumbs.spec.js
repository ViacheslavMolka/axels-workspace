import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Breadcrumbs from '../components/breadcrumbs';


describe('Breadcrumbs component', () => {
    it('Breadcrumbs snapshot', () => {
        const component = renderer.create(<Router><Breadcrumbs/></Router>).toJSON()
        expect(component).toMatchSnapshot()
    });
})
