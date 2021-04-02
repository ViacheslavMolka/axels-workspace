import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import SummaryCompoment from '../components/shoppingCard';


describe('SummaryCompoment component', () => {
    it('SummaryCompoment snapshot', () => {
        const component = renderer.create(<Provider store={store}><SummaryCompoment/></Provider>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
