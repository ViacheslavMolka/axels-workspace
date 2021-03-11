import React from 'react';
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  const imageCode = <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-code-slash" fill="#cf4dff" xmlns="http://www.w3.org/2000/svg">
                      <path  
                        d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 
                        .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 
                        .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                    </svg>
  const imageCart = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cf4dff" className="bi bi-cart3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 
                      11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 
                      12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>              
  return (
    <Container>
        <Navbar className='navigation' expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">{imageCode} <span className='frontend-text'>Front-end Developer Test Task</span></Navbar.Brand>
          <Navbar.Brand href="#"><span className='cart-text'>cart</span> {imageCart}</Navbar.Brand>
        </Navbar> 
    </Container>
  )
}

export default Header;