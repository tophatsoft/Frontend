import { USER_DETAIL } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
   user: null
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case USER_DETAIL:
            return {user: action.payload}
        default: 
            return state;
    }
}