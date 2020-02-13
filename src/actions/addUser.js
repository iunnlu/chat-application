import {ADD_USER, CREATE_ERROR} from './types';
import axios from 'axios';
import history from '../components/history';

export const addUser = formValues => dispatch => {
    const {username, password, email} = formValues;
    axios.post('http://localhost:3001/users/create', {
        username: username,
        password: password,
        email: email
    }).then((response) => {
        if(response.status === 200){
            dispatch({
                type: CREATE_ERROR,
                payload: response.data.message
            })
        }else if(response.status === 201){
            dispatch({
                type: ADD_USER,
                payload: username
            })
            history.push('/')
        }
    })
}