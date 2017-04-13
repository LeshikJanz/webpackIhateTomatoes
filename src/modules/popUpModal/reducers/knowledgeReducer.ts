import { createReducer } from 'utils/createReducer';
import { openKnowledge } from "../../actions";
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
  })
}, initialState);
