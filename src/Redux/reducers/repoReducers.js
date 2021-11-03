import * as actions from '../actionTypes';

export const repoListReducer = (state = { repos: [] }, action) => {
    switch (action.type) {
        case actions.REPOS_REQUEST:
            return { loading: true, repos: [] }
        case actions.REPOS_SUCCESS:
            return { loading: false, repos: action.payload }
        case actions.REPOS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
