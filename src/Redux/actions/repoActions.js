import axios from 'axios';
import { GITHUB_BASE_URL } from '../../Config/config';
import {
    REPOS_REQUEST,
    REPOS_SUCCESS,
    REPOS_FAIL,
} from '../actionTypes';

const config = {
    headers: {
      'Accept':'application/vnd.github.v3+json',
      'Authorization': process.env.REACT_APP_API_ACCESS_TOKEN
    }
}

//Action to fetch github repos
export const listRepos = () => async (dispatch) => {
    try {
        dispatch({ type: REPOS_REQUEST })
        const { data } = await axios.get(`${GITHUB_BASE_URL}/repositories?&per_page=10`,config)
        dispatch({ type: REPOS_SUCCESS, payload: data })
    } catch (error) {
        console.log('Error occured')
        dispatch({
            type: REPOS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

//Action to search for repos
export const searchRepos = (repo_name) => async (dispatch) => {
    try {
        dispatch({ type: REPOS_REQUEST })
        const { data } = await axios.get(`${GITHUB_BASE_URL}/search/repositories?q=${repo_name}&order=desc&per_page=10`,config)
        dispatch({ type: REPOS_SUCCESS, payload: data.items })
    } catch (error) {
        dispatch({
            type: REPOS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}