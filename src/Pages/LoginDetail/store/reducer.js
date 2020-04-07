import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  pwState: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_PW_STATE:
      return state.set('pwState', action.flag);
    default:
      break;
  }
  return state;
};
