import * as actions from '../actionTypes';

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case actions.USERS_REQUEST:
            return { loading: true, users: [] }
        case actions.USERS_SUCCESS:
            return { loading: false, users: action.payload }
        case actions.USERS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
