import createUser from './createUser';
import loginUser from './loginUser';
import chatContent from './chatContent';
import selectedRoom from './selectedRoom'
import {combineReducers} from 'redux';

export default combineReducers({
    createUser,
    loginUser,
    chatContent,
    selectedRoom
})