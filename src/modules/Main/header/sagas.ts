import { put, takeEvery } from 'redux-saga/effects'
import { addNewKnowledge } from "../../../api/cloud";
import { Task } from "redux-saga";
import { addTag, updateKnowledgeError, createNewKnowledge } from "../../actions";
import { IKnowledge } from "interfaces/index";

/**
 * Handle creating new knowledge
 *
 * @param {IKnowledge} payload - knowledge
 * @returns {Iterator<Object | Task>}
 */
export function* createNewKnowledgeSaga( { payload }: IKnowledge ): Iterator<Object | Task> {
  try {
    const knowledge = yield addNewKnowledge(payload);
    yield put(addTag(knowledge));
  } catch (e) {
    yield put(updateKnowledgeError(e));
  }
}

/**
 * Saga with header actions
 */
export function* headerSaga() {
  yield takeEvery(createNewKnowledge().type, createNewKnowledgeSaga);
}

