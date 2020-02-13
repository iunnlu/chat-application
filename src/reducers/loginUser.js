import {LOGIN_USER, LOGIN_ERROR} from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, userInfo: action.payload}
        case LOGIN_ERROR:
            return {...state, error: action.payload}
        default: return state;
    }
}