import axios from 'axios';
import {USER_DETAIL } from './types';


export const editAccount = (age, sex, avatar, location) => async () => {
    try{

    }catch(e) {

    }
}

export const getUserDetail = () => async (dispatch) => {
    try{
        const response = await axios.get('/users');
       
        dispatch({type: USER_DETAIL, payload: response.data})


    }catch(e) {
        console.log(e)
    }
}