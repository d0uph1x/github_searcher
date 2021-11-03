import React, {useState } from 'react'
import { InputGroup,Button,FormControl,Col,Row } from 'react-bootstrap'
import {searchUser,listUsers} from '../Redux/actions/userActions'
import {searchRepos,listRepos} from '../Redux/actions/repoActions'
import {useDispatch}from 'react-redux';

const Searchbar = ({search_label}) => {
    const [searchString,setSearchString] = useState('')
    const [clearVisible,setClearVisible] = useState(false)

    const dispatch = useDispatch()

    // Handle search button click
    const _handleSearch = () =>{
        search_label === 'users' ? dispatch(searchUser(searchString)) : dispatch(searchRepos(searchString))
        setClearVisible(true)
    }

    // Handle clear button click
    const _handleClear = () =>{
        setSearchString('')
        search_label === 'users' ? dispatch(listUsers()) : dispatch(listRepos())
        setClearVisible(false)
    }

    return (
            <div className='my-4'>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder={`Search ${search_label}`}
                            aria-label={`Search ${search_label}`}
                            value={searchString}
                            onChange={(e)=>setSearchString(e.target.value)}
                            />
                            <Button variant="primary" id="button-addon2" onClick={_handleSearch} disabled={searchString.length > 2 ? false:true}>
                            Search <i className='fa fa-search'></i>
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col lg={3}>
                        {clearVisible && (
                        <Button variant="outline-warning" id="button-addon2" onClick={()=>_handleClear()}>
                            Clear <i className='fa fa-times'></i>
                        </Button>
                        )}
                    </Col>
                </Row>
            </div>
    )
}

export default Searchbar
