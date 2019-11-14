import axios from 'axios';
import { GET_ERRORS, USER_AUTHENTICATED, CLEAR_ERRORS } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => async (dispatch) => {
    try {
        const response = await axios.post('/users/register', user)
        if (response.data.error) {
            return console.log(response.data.error)
        }
        history.push('/login')
    } catch (err) {
        if (err.response.status === 400) {
            console.log(err.response.data.error)

        }
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data.error
        });
    }


}

export const loginUser = (user) => async (dispatch) => {

    try {
        const response = await axios.post('/users/login', user)
        const { token } = response.data;

        await localStorage.setItem('jwtToken', token)
        setAuthToken(token);
        const decoded = await jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    } catch (err) {
        if (err.response.status === 400) {
            console.log(err.response.data.error)

        }
        dispatch({ type: GET_ERRORS, payload: err.response.data.error });
    }

}

export const setCurrentUser = decoded => {
    return {
        type: USER_AUTHENTICATED,
        payload: decoded
    }
}

export const clearError = () => dispatch => {
    
        dispatch({type:CLEAR_ERRORS})
    
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/');
}