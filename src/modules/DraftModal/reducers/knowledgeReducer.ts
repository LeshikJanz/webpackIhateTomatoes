import { createReducer } from 'utils/createReducer';
import { openKnowledge, editKnowledge, changeKnowledgeName, updateCloud, clearKnowledge } from "modules/actions";

/**
 * Initial state for knowledge reducer
 */
const initialState = {
  name: "",
  text: {
    "entityMap": {},
    "blocks": [{
      "key": "9gm3s",
      "text": "",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    }]
  },
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
