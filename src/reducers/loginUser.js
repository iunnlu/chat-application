import {LOGIN_USER, ERROR} from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, currentUser: action.payload}
        case ERROR:
            return {...state, error: action.payload}
        default: return state;
    }
}