import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCard from './shopping-card';
import Header from './header';

function App() {
  return (
    <div className='main-wrapper'>
      <Header/>
      <ShoppingCard/>
    </div>
  )
}

export default App;