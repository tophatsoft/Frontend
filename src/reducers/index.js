import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import accountDetailReducer from './accountDetailReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    accountDetail: accountDetailReducer
});