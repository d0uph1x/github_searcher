import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Components/Navigation'
import Repos from '../Components/Repos/Repos'
import Searchbar from '../Components/Searchbar'

const Repositories = () => {
    return (
        <Container fluid>
            <Navigation/>
            <Searchbar search_label='repos'/>
            <h2 className='text-center'>Repositories</h2>
            <Repos/>
        </Container>
    )
}

export default Repositories
