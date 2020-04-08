import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export const changeUnderline = path => {
  return {
    type: constants.CHANGE_UNDERLINE,
    path: fromJS(path)
  };
};
