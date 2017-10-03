import { createReducer } from 'utils/createReducer';
import { clearResearchKnowledges, getKnowledgesDone, getKnowledgesInit } from "../actions";

/**
 * Initial state for research reducer
 */
const initialState = [];

export default createReducer({
  [getKnowledgesInit]: (state: any) => initialState,
  [getKnowledgesDone]: (state: any, payload: any) => [...payload],
  [clearResearchKnowledges]: (state: any) => initialState,
}, initialState);
