import { createReducer } from 'utils/createReducer';
import {
  disableHighlight, enableHighlight
} from "../actions";

/**
 * Initial state for hint reducer
 */
const initialState = {
  name: '',
  enabled: false
};

export default createReducer({
    [enableHighlight]: (state: any, payload: string) => ({
      ...state,
      name: payload,
      enabled: true
    }),
    [disableHighlight]: (state: any, payload: string) => ({
      ...state,
      name: payload,
      enabled: false
    })
  },
  initialState
);
