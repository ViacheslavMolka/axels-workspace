import React from 'react';

import { ShoppingCard } from './index';
import HeaderPage from '../pages/headerPage'; 

import { GlobalStyle, AppWrapper, GlobalMediaStyle } from '../styled/index';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <>
    <GlobalStyle/>
    <GlobalMediaStyle/>
    <AppWrapper className='app'>
      <HeaderPage/>
      <ShoppingCard/>
    </AppWrapper>  
  </>
  
)
    
export default App;