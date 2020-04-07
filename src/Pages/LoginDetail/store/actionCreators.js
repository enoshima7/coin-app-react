import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export const changePwState = (flag) => {
  return {
    type: constants.CHANGE_PW_STATE,
    flag
  };
};
