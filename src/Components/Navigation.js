import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
          <Navbar bg="dark" variant="dark" expand='md'>
          <Container>
          <Navbar.Brand as={Link} to="/">< i className='fab fa-github'></i> GitHUB Searcher </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as= {Link} to="/">Users</Nav.Link>
              <Nav.Link as={Link} to="/repos">Repositories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
}

export default Navigation
