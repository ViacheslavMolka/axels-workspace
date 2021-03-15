import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { CodeSlash, Cart3 } from 'react-bootstrap-icons';

const Header = () => {          
  return (
    <Container>
        <Navbar className='navigation' expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#"><CodeSlash size={29} color='#cf4dff'/> <span className='frontend-text'>Front-end Developer Test Task</span></Navbar.Brand>
          <Navbar.Brand href="#"><span className='cart-text'>cart</span><Cart3 size={19} color='#cf4dff'/><span className='circle'>3</span></Navbar.Brand>
        </Navbar> 
    </Container>
  )
}

export default Header;