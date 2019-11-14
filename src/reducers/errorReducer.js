import { GET_ERRORS,CLEAR_ERRORS } from '../actions/types';

const initialState = {
    errorMessage: ''

};

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            return {errorMessage: action.payload}
        case CLEAR_ERRORS:
            return {errorMessage: ''}
        default: 
            return state;
    }
}