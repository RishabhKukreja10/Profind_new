import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className='bg-color' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <b>PROFIND</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/login'>
                <i class='fas fa-user'></i>
                Sign In
              </Nav.Link>
              <Nav.Link href='/wishlist'>
                <i class='fa-solid fa-heart'></i>
                Wishlist
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
