import { createReducer } from 'utils/createReducer';
import { fetchKnowledgeDone, fetchKnowledgeError, openKnowledge } from "../../actions";
import { IKnowledge } from "../../../interfaces/index";

const initialState = {
  Name: "",
  Text: {},
  CreateDate: "",
  UpdateDate: "",
  cloudId: ""
}

export default createReducer({
  [openKnowledge]: (state: any, payload: any) => ({
    ...state,
    ...payload
  }),
  [fetchKnowledgeDone]: (state: any, payload: IKnowledge) => ({
    ...state,
    ...payload
  }),
  [fetchKnowledgeError]: (state: any, error: string) => ({
    ...state,
    error
  }),
}, initialState);
