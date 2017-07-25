import { createReducer } from 'utils/createReducer';
import { openKnowledge, editKnowledge, changeKnowledgeName } from "modules/actions";

/**
 * Initial state for knowledge reducer
 */
const initialState = {
  name: "",
  text: {},
  createDate: "",
  updateDate: "",
  cloudId: ""
};

export default createReducer({
  [openKnowledge]: ( state: any, payload: any ) => ({
    ...state,
    ...payload
  }),
  [editKnowledge]: ( state: any, payload: string ) => ({
    ...state,
    text: JSON.parse(payload)
  }),
  [changeKnowledgeName]: ( state: any, payload: string ) => ({
    ...state,
    name: payload
  })

}, initialState);
