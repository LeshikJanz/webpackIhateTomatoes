import { createReducer } from 'utils/createReducer';
import { filterTags } from "../actions";

const initialState: any = {
  name: ''
};

export default createReducer({
  [filterTags]: (state: any, payload: any) => ({
    ...payload
  })
  }, initialState);
