import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Components/Navigation'
import Searchbar from '../Components/Searchbar'
import Users from '../Components/Users/Users';


const Home = () => {
    return (
        <Container fluid>
            <Navigation/>
            <Searchbar search_label='users'/>
            <Users/>
        </Container>
    )
}

export default Home
