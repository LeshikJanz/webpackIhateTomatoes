import { createReducer } from 'utils/createReducer';
import { openKnowledge, editKnowledge, changeKnowledgeName, updateCloud, clearKnowledge } from "../../actions";
import { State } from 'slate'
import { INITIAL_SLATE_STATE } from "../constants";

/**
 * Initial state for knowledge reducer
 */
const initialState = {
  name: "",
  text: 'A string of plain text.',
  createDate: "",
  updateDate: "",
  cloudId: ""
};

export default createReducer({
  [openKnowledge]: (state: any, payload: any) => ({
    ...state,
    ...payload
  }),
  [editKnowledge]: (state: any, payload: string) => ({
    ...state,
    text: payload
  }),
  [changeKnowledgeName]: (state: any, payload: string) => ({
    ...state,
    name: payload
  }),
  [clearKnowledge]: (state: any, payload: string) => ({
    ...initialState
  })
}, initialState);
