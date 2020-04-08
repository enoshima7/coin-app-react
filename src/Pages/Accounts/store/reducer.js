import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  chequeingFlag:''
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SHOW_CHEQUING:
      return state.set('chequeingFlag','show')
    case constants.CLOSE_CHEQUING:
      return state.set('chequeingFlag','')
    default:
      break;
  }
  return state;
};