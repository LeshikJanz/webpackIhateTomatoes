import { createReducer } from 'utils/createReducer';
import { IKnowledge } from "interfaces/index";
import { addTag, fetchCloudDone, fetchCloudError, updateCloud } from "../../../../actions";

const initialState: any = {
  knowledge: []
};

export default createReducer({
  [addTag]: (state: any, payload: any) => ({
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
  [updateCloud]: (state, payload: IKnowledge) => ({
    ...state,
    knowledge: [
      ...state.knowledge.filter((kn: IKnowledge) => kn.id !== payload.id),
      ...payload
    ]
  })
}, initialState);
