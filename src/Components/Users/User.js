import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'

const User = ({user}) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='my-3'>
                <Card.Img variant="top" src={user.avatar_url} />
                <Card.Body className='text-center'>
                    <Card.Title>{user.login}</Card.Title>
                    <a href={user.html_url} rel="noreferrer" target='_blank'
                     className='btn btn-primary'>View on Github <i className='fas fa-external-link-alt ml-1'></i></a>
                </Card.Body>
                </Card>
        </>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired
  };

export default User
