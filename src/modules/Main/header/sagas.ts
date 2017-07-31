import { put, takeEvery } from 'redux-saga/effects'
import { addNewKnowledge } from "api/cloud";
import { Task } from "redux-saga";
import { addTag, updateKnowledgeError, createNewKnowledge } from "../../actions";
import { IKnowledge } from "interfaces/index";
import { NotificationManager } from 'react-notifications';

/**
 * Handle creating new knowledge
 *
 * @param {IKnowledge} payload - knowledge
 * @returns {Iterator<Object | Task>}
 */
export function* createNewKnowledgeSaga( { payload }: IKnowledge ): Iterator<Object | Task> {
  try {
    payload.accountId = localStorage.getItem('UserId');
    const knowledge = yield addNewKnowledge(payload);

    yield put(addTag(knowledge));
    NotificationManager.success(`The knowledge ${knowledge.name} has been successfully created`, 'Success!');
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(updateKnowledgeError(error));
  }
}

/**
 * Saga with header actions
 */
export function* headerSaga() {
  yield takeEvery(createNewKnowledge().type, createNewKnowledgeSaga);
}

