import { createReducer } from 'utils/createReducer';
import { openKnowledge, editKnowledge, changeKnowledgeName, updateCloud, clearKnowledge } from "../../actions";
import {
  changeRecognitionLanguage, handleCollapsePlayer, handlePlayer, startRecognition,
  stopRecognition
} from "../actions";

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
  cloudId: "",
  isRecognitionRunning: false,
  isPlayerOpen: false,
  isPlayerCollapsed: false,
  recognitionLang: 'en'
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
  }),
  [startRecognition]: (state: any) => ({
    ...state,
    isRecognitionRunning: true
  }),
  [stopRecognition]: (state: any) => ({
    ...state,
    isRecognitionRunning: false
  }),
  [handlePlayer]: (state: any) => ({
    ...state,
    isPlayerOpen: !state.isPlayerOpen
  }),
  [handleCollapsePlayer]: (state: any) => ({
    ...state,
    isPlayerCollapsed: !state.isPlayerCollapsed
  }),
  [changeRecognitionLanguage]: (state: any, payload: string) => ({
    ...state,
    recognitionLang: payload
  }),

}, initialState);
