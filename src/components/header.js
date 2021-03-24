import React from 'react';
import { Navbar } from 'react-bootstrap';

import { CodeSlash, Cart3 } from 'react-bootstrap-icons';
import { HeaderWrapper } from '../styled/index';

const Header = ({ number }) => (
  <HeaderWrapper> 
        <Navbar.Brand><CodeSlash size={29} color='#cf4dff'/> <span className='frontend-text'>Front-end Developer Test Task</span></Navbar.Brand>
        <Navbar.Brand><span className='cart-text'>cart</span><Cart3 size={19} color='#cf4dff'/><span className='circle'>{number}</span></Navbar.Brand>
  </HeaderWrapper>
);

export default Header;