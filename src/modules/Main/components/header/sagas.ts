import { put, takeEvery, select } from 'redux-saga/effects'
import { addNewKnowledge } from "api/cloud";
import { Task } from "redux-saga";
import { addTag, updateKnowledgeError, createNewKnowledge } from "../../../actions";

const getFromState = (state: any) => state.Knowledge;

export function* createNewKnowledgeSaga({payload}: any): Iterator<Object | Task> {
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

