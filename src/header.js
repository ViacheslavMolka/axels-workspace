import React from 'react';
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
        <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar> 
    </Container>
  )
}

export default Header;