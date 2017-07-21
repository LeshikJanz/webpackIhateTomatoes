import { put, takeEvery, select } from 'redux-saga/effects'
import {
  updateKnowledgeError, saveKnowledge, updateCloudKnowledges
} from "../actions";
import { Task } from "redux-saga";

const getFromState = (state: any) => state.Knowledge;
export function* saveKnowledgeSaga(): Iterator<Object | Task> {
  try {
    const knowledge = yield select(getFromState);
    yield put(updateCloudKnowledges(knowledge));
  } catch (e) {
    yield put(updateKnowledgeError(e));
  }
}

export function* knowledgeSaga() {
  yield takeEvery(saveKnowledge().type, saveKnowledgeSaga);
}

