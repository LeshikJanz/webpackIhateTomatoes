import { createReducer } from 'utils/createReducer';
import { IKnowledge } from "interfaces/index";
import { addTag, fetchCloudDone, fetchCloudError } from "../../../../actions";

const initialState: any = [];

export default createReducer({
  [addTag]: (state: any, payload: any) => ({
    ...state,
    knowledge: [...state.knowledge, payload]
  }),
  [fetchCloudDone]: (state: any, payload: IKnowledge[]) => ({
    ...state,
    ...payload
  }),
  [fetchCloudError]: (state: any, error: Error) => ([
    ...state,
    error.message
  ])
}, initialState);
