import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  path: 'main'
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_UNDERLINE:
      return state.set('path', action.path);
    default:
      break;
  }
  return state;
};
