import { createReducer } from 'utils/createReducer';
import { addTag, fetchCloudDone, fetchCloudError, updateCloudKnowledges } from "../../actions";
import { IKnowledge } from "../../../interfaces/index";

const initialState: any = [];

export default createReducer({
  [addTag]: (state: any, payload: any) => ([
    ...state,
    payload
  ]),
  [fetchCloudDone]: (state: any, payload: IKnowledge[]) => ([
    ...state,
    ...payload
  ]),
  [fetchCloudError]: (state: any, error: Error) => ([
    ...state,
    error.message
  ]),
  [updateCloudKnowledges]: (state: any, payload: any) => ([
    ...state.filter((elem: any) => payload.id != elem.id),
    payload
  ]),
}, initialState);
