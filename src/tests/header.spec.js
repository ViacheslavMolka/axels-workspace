import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../components/header';


describe('Header component', () => {
    it('Header snapshot', () => {
        const component = renderer.create(<Header/>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
