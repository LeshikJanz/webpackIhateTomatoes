import { put, takeEvery, select } from 'redux-saga/effects'
import {
  updateKnowledgeError, saveKnowledge, updateCloudKnowledges, createNewKnowledge, addTag
} from "../actions";
import { addNewKnowledge } from "../../api/cloud";

const getFromState = (state: any) => state.Knowledge;

export function* createNewKnowledgeSaga({payload}: any) {
  try {
    const knowledge = yield addNewKnowledge(payload);
    yield put(addTag(knowledge));
  } catch (e) {
    yield put(updateKnowledgeError(e));
  }
}

export function* headerSaga() {
  yield takeEvery(createNewKnowledge().type, createNewKnowledgeSaga);
}

