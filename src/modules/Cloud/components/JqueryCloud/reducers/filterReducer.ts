import { createReducer } from 'utils/createReducer';
import { filterTags } from "../actions";
import { fetchCloudInit } from "modules/actions";

const initialState: any = {
  name: '',
  disabledAnimation: false
};

export default createReducer({
  [filterTags]: (state: any, payload: any) => ({
    ...payload,
    disabledAnimation: true
  }),
  [fetchCloudInit]: (state: any, payload: any) => ({
    ...state,
    disabledAnimation: false
  })
  }, initialState);
