import { createReducer } from 'utils/createReducer';
import { openKnowledge, editKnowledge } from "../../actions";

const initialState = {
  Name: "",
  Text: {},
  CreateDate: "",
  UpdateDate: "",
  cloudId: ""
};

export default createReducer({
  [openKnowledge]: (state: any, payload: any) => ({
    ...state,
    ...payload
  }),
  [editKnowledge]: (state: any, payload: string) => ({
    ...state,
    Text: JSON.parse(payload)
  })
}, initialState);