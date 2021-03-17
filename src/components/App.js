import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCard from './shoppingCard';
import Header from './headerComponent';
import { AppWrapper, GlobalStyle } from '../styled/appStyles';

const App = () => (
  <>
    <GlobalStyle/>
    <AppWrapper>
      <Header/>
      <ShoppingCard/>
    </AppWrapper>  
  </>
  
)
    
export default App;