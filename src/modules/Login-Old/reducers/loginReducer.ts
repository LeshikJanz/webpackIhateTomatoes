import { createReducer } from 'utils/createReducer';
import { addTag, fetchCloudDone, fetchCloudError, updateCloudKnowledges, setAuthMethod } from "../../actions";
import { IKnowledge } from "../../../interfaces/index";

const initialState: any = {
  authType: 'login'
};

export default createReducer({
  [setAuthMethod]: (state: any, payload: any) => ({
    ...state,
    authType: payload
  })
}, initialState);
