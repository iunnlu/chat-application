import {ADD_USER, ERROR} from './types';
import axios from 'axios';
import history from '../components/history';

export const addUser = formValues => dispatch => {
    axios.post('http://localhost:3001/users/create', {
        username: formValues
    }).then((response) => {
        if(response.status === 200){
            dispatch({
                type: ERROR,
                payload: response.data.error_description
            })
        }else if(response.status === 201){
            dispatch({
                type: ADD_USER,
                payload: formValues
            })
            history.push('/')
        }
    })
}