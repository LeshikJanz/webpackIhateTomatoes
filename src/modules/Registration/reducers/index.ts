import { createReducer } from 'utils/createReducer';
import { searchPlace } from "../actions";

/**
 * Initial state for knowledge reducer
 */
const initialState = {
  address: ''
};

export default createReducer({
  [searchPlace]: ( state: any, payload: any ) => ({
    ...state,
    ...payload
  })
}, initialState);
