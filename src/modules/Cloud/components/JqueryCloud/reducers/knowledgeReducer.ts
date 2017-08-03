import { createReducer } from 'utils/createReducer';
import { IKnowledge } from "interfaces/index";
import {
  addTag, fetchCloudDone, fetchCloudError, saveKnowledge,
  createNewKnowledgeDone
} from "modules/actions";
import { updateCloudName } from "../actions";

const initialState: any = {
  knowledge: []
};

export default createReducer({
  [addTag]: (state: any, payload: any) => ({
    ...state,
    knowledge: [...state.knowledge, payload]
  }),
  [createNewKnowledgeDone]: (state: any, payload: any) => ({
    ...state,
    knowledge: [...state.knowledge, payload]
  }),
  [fetchCloudDone]: (state: any, payload: IKnowledge[]) => ({
    ...state,
    ...payload
  }),
  [fetchCloudError]: (state: any, error: Error) => ([
    ...state,
    error.message
  ]),
  [saveKnowledge]: (state, payload: IKnowledge) => ({
    ...state,
    knowledge: [
      ...state.knowledge.filter((kn: IKnowledge) => kn.id !== payload.id),
      ...payload
    ]
  }),
  [updateCloudName]: (state, payload: string) => ({
    ...state,
    name: payload
  })
}, initialState);
