import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import ShoppingCard from '../components/shoppingCard';


describe('ShoppingCard component', () => {
    it('ShoppingCard snapshot', () => {
        const component = renderer.create(<Provider store={store}><ShoppingCard/></Provider>).toJSON()
        expect(component).toMatchSnapshot()
    });
});
