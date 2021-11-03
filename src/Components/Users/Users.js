import React,{useEffect} from 'react';
import { listUsers } from '../../Redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { Col,Row } from 'react-bootstrap';
import User from './User'
import Loader from '../Common/Loader';
import Message from '../Common/Message';

const Users = () => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const { loading,error, users } = userList

    useEffect(()=>{
        dispatch(listUsers())
    },[dispatch])
    return (
        <>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Row>
                {users.length > 0 && users.map((user,index)=>(
                        <Col lg={3} key={user.id}>
                            <User user={user}/>
                        </Col>
                ))} 
            </Row>

            )}
        </>
    )
}

export default Users
