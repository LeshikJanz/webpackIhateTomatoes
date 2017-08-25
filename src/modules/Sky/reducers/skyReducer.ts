import { createReducer } from 'utils/createReducer';
import { ICloud } from "interfaces/index";
import { getCloudsDone } from "../actions";
import { createCloudDone } from "../../actions";

/**
 * Initial state for sky reducer
 */
const initialState: ICloud[] = [];

export default createReducer({
  [getCloudsDone]: (state: ICloud[], payload: ICloud[]) => payload,
  [createCloudDone]: (state: ICloud[], payload: ICloud) => ([
    ...state,
    payload
  ])
}, initialState);
