import React from 'react';;
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import App from '../components/App';


describe('App component', () => {
    it('App snapshot', () => {
        const component = renderer.create(<Provider store={store}><App/></Provider>).toJSON()
        expect(component).toMatchSnapshot()
    });
})
