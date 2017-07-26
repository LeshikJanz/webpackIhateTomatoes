import { createReducer } from 'utils/createReducer';
import { IUser } from "../../../interfaces/index";
import { getUsersDone } from "../actions";

/**
 * Initial state for user reducer
 */
const initialState: IUser[] = [];

export default createReducer({
  [getUsersDone]: (state: any, payload: any) => ([
    ...state,
    ...payload
  ])
}, initialState);
