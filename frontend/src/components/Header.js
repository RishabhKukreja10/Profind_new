import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <header>
      <Navbar className='bg-color' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <b>PROFIND</b>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Routes>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </Routes> */}

            <SearchBox />
            <Nav className='ml-auto'>
              <LinkContainer to='/details'>
                <Nav.Link>
                  <i class='fa-solid fa-camera'></i>
                  Camera
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/wishlist'>
                <Nav.Link>
                  <i className='fa-solid fa-heart'></i>
                  Wishlist
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
