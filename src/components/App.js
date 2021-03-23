import React from 'react';

import { ShoppingCard } from './index';
import HeaderPage from '../pages/headerPage'; 

import { GlobalStyle } from '../styled/globalStyles';
import { AppWrapper } from '../styled/appStyles'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <>
    <GlobalStyle/>
    <AppWrapper className='app'>
      <HeaderPage/>
      <ShoppingCard/>
    </AppWrapper>  
  </>
  
)
    
export default App;