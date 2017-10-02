import { createReducer } from 'utils/createReducer';
import { getKnowledgesDone, getKnowledgesInit } from "../actions";

/**
 * Initial state for research reducer
 */
const initialState = [];

export default createReducer({
  [getKnowledgesInit]: (state: any) => initialState,
  [getKnowledgesDone]: (state: any, payload: any) => [...payload],
}, initialState);
