import { createReducer } from 'utils/createReducer';
import { ICloud, IKnowledge } from "interfaces/index";
import {
  addTag, fetchCloudDone, fetchCloudError, saveKnowledge,
  createNewKnowledgeDone, updateCloudInit, updateCloudDone
} from "modules/actions";
import { updateCloudName } from "../actions";

const initialState: ICloud = {
  name: '',
  initialName: '',
  isNameSaved: true,
  knowledge: [],
  goal: '',
  accountId: ''
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
    ...payload,
    initialName: payload.name,
    isNameSaved: true
  }),
  [saveKnowledge]: (state, payload: IKnowledge) => ({
    ...state,
    knowledge: [
      ...state.knowledge.filter((kn: IKnowledge) => kn.id !== payload.id),
      ...payload
    ]
  }),
  [updateCloudName]: (state, payload: string) => ({
    ...state,
    name: payload,
    isNameSaved: false
  }),
  [updateCloudInit]: (state) => ({
    ...state,
    initialName: state.name,
    isNameSaved: true
  }),
  [updateCloudDone]: (state, payload: ICloud) => ({
    ...state,
    ...payload
  }),
}, initialState);