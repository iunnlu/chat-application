import {ADD_USER, CREATE_ERROR} from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case ADD_USER: 
            return { ...state, username: action.payload }
        case CREATE_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}