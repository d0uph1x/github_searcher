import React,{useEffect} from 'react';
import { listRepos } from '../../Redux/actions/repoActions';
import { useSelector, useDispatch } from 'react-redux';
import { Col,Row } from 'react-bootstrap';
import Repo from './Repo'
import Loader from '../Common/Loader';
import Message from '../Common/Message';

const Repos = () => {
    const dispatch = useDispatch()
    const repoList = useSelector(state => state.repoList)
    const { loading,error, repos } = repoList

    useEffect(()=>{
        dispatch(listRepos())
    },[dispatch])

    return (
        <>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Row>
                {repos.length > 0 && repos.map((repo)=>(
                        <Col lg={3} key={repo.id}>
                            <Repo repo={repo}/>
                        </Col>
                ))} 
            </Row>

            )}
        </>
    )
}

export default Repos
