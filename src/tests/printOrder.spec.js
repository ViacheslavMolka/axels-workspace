import React from 'react';
import renderer from 'react-test-renderer';

import PrintOrder from '../components/printOrder';


describe('PrintOrder component', () => {
    it('PrintOrder snapshot', () => {
        const component = renderer.create(<PrintOrder/>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
