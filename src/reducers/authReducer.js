import { USER_AUTHENTICATED } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case USER_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}