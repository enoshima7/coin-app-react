import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../Pages/Login/store';
import { reducer as loginDetailReducer } from '../Pages/LoginDetail/store';


export default combineReducers({
  login: loginReducer,
  loginDetail: loginDetailReducer,
});