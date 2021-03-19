import React from 'react';

import { ShoppingCard, Header } from './index';

import { GlobalStyle } from '../styled/globalStyles';
import { AppWrapper } from '../styled/appStyles'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <>
    <GlobalStyle/>
    <AppWrapper className='app'>
      <Header/>
      <ShoppingCard/>
    </AppWrapper>  
  </>
  
)
    
export default App;