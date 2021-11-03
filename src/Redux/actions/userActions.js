import axios from 'axios';
import { GITHUB_BASE_URL } from '../../Config/config';
import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAIL,
} from '../actionTypes';


const config = {
    headers: {
      'Authorization': process.env.REACT_APP_API_ACCESS_TOKEN
    }
}

//Action to fetch Github users
export const listUsers = () => async (dispatch) => {
    try {
        dispatch({ type: USERS_REQUEST })
        const { data } = await axios.get(`${GITHUB_BASE_URL}/users`,config)
        dispatch({ type: USERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USERS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}


//Action to search users
export const searchUser = (user_name) => async (dispatch) => {
    try {
        dispatch({ type: USERS_REQUEST })
        const { data } = await axios.get(`${GITHUB_BASE_URL}/search/users?q=${user_name}&order=desc&per_page=10`,config)
        dispatch({ type: USERS_SUCCESS, payload: data.items })
    } catch (error) {
        dispatch({
            type: USERS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}