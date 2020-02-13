import { LOGIN_USER, LOGIN_ERROR } from './types';
import history from '../components/history';
import firebase from '../database/firebase';

export const loginUser = (formValues) => dispatch => {
    const { email, password } = formValues;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
        dispatch({
            type: LOGIN_ERROR,
            payload: error.message
        })
    }).then(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if(user != null){
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        username: user.uid,
                        instanceLocator: "v1:us1:771a6042-0320-4d61-9785-cefe4565cb6f",
                        tokenProvider: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/771a6042-0320-4d61-9785-cefe4565cb6f/token"
                    }
                })
                history.push('/home')
            }
        });
    })
}