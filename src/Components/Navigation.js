import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
          <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="/">< i className='fab fa-github'></i> GitHUB Searcher </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as= {Link} to="/">Users</Nav.Link>
            <Nav.Link as={Link} to="/repos">Repositories</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default Navigation
