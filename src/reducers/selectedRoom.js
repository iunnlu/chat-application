import {SELECTED_ROOM} from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case SELECTED_ROOM:
            return { ...state, room: action.payload }
        default:
            return state;
    }
}