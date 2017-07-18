import { createReducer } from 'utils/createReducer';
import { fetchCloudsDone } from "../../actions";

const initialState = {};

export default createReducer({
  [fetchCloudsDone]: (state: any, payload: any) => ({
    ...state,
    ...payload
  })
}, initialState);
