import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Repo = ({repo}) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='my-3'>
                <Card.Img variant="top" src={repo.owner.avatar_url} />
                <Card.Body className='text-center'>
                    <Card.Title>{repo.full_name}</Card.Title>
                    <Card.Text>
                        <p>Description : <strong>{repo.description}</strong></p>
                    </Card.Text>
                </Card.Body>
                </Card>
        </>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired
  };

export default Repo
