import { createReducer } from 'utils/createReducer';
import { ICloud } from "interfaces/index";
import { getCloudsDone } from "../actions";

/**
 * Initial state for user reducer
 */
const initialState: ICloud[] = [];

export default createReducer({
  [getCloudsDone]: (state: any, payload: any) => ([
    ...payload
  ])
}, initialState);
