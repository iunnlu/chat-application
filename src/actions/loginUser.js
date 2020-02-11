import { LOGIN_USER, ERROR } from './types';
import Chatkit from '@pusher/chatkit-client';
import history from '../components/history';

export const loginUser = (formValues) => dispatch => {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator: "v1:us1:771a6042-0320-4d61-9785-cefe4565cb6f",
        userId: formValues,
        tokenProvider: new Chatkit.TokenProvider({
            url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/771a6042-0320-4d61-9785-cefe4565cb6f/token"
        })
    })
    chatManager
        .connect()
        .then(currentUser => {
            dispatch({
                type: LOGIN_USER,
                payload: currentUser
            })
            history.push('/home')
        })
        .catch(error => {
            dispatch({
                type: ERROR,
                payload: error.info.error_description
            })
        });
}