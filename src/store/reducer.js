import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../Pages/Login/store';
import { reducer as loginDetailReducer } from '../Pages/LoginDetail/store';
import { reducer as headerReducer } from '../Common/Header/store';
import { reducer as accountsReducer } from '../Pages/Accounts/store';

export default combineReducers({
  login: loginReducer,
  loginDetail: loginDetailReducer,
  header: headerReducer,
  accounts: accountsReducer,
});
