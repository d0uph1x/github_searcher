import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navigation from '../Components/Navigation'

const Notfound = () => {
    return (
        <>
            <Navigation/>
            <Container>
                <div className='text-center'>
                    <h2 className='text-center my-3'>Page not found..</h2>
                    <Link to='/'>
                        <Button variant='outline-warning'><i className='fa fa-home fa-2x'></i>Home</Button>
                    </Link>
                </div>
            </Container>
            
        </>
    )
}

export default Notfound
