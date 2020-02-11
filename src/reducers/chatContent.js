import {CHAT_CONTENT, SELECTED_ROOM} from '../actions/types';

export default (state=[], action) => {
    switch(action.type){
        case CHAT_CONTENT: 
            return action.payload;
        default: return state;
    }
}