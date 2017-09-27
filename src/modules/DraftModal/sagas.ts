import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchCloud, updateKnowledgeById } from "api/cloud";
import {
  fetchCloudInit, fetchCloudDone, fetchCloudError, updateKnowledgeInit, updateKnowledgeError, saveKnowledge,
  updateKnowledgeDone
} from "../actions";
import { Task } from "redux-saga";
import { ICloud } from "interfaces";
import { NotificationManager } from 'react-notifications';
import { addView } from "api/view";

const getFromState = (state: any) => state.Knowledge;

/**
 * Handle fetching cloud by id
 *
 * @param {string} payload - cloud id
 *
 * @returns {Iterator<Object | Task>}
 */
export function* fetchCloudSaga({ payload } : string): Iterator<Object | Task> {
  try {
    const cloud: ICloud = yield fetchCloud(payload);
    yield addView({ accountId: localStorage.getItem('UserId'), cloudId: cloud.id });
    yield put(fetchCloudDone(cloud));
  } catch (error) {
    yield put(fetchCloudError(error));
    NotificationManager.error(error.error && error.error.message, 'Error!');
  }
}

/**
 * Updates knowledge edited in Draft editor
 *
 * @returns {Iterator<Object | Task>}
 */
export function* updateKnowledgeSaga(): Iterator<Object | Task> {
  try {
    const knowledge = yield select(getFromState);

    const updatedKnowledge = yield updateKnowledgeById(knowledge.id, knowledge);
    updatedKnowledge.account = knowledge.account;
    yield put(saveKnowledge(updatedKnowledge));
    yield put(updateKnowledgeDone(updatedKnowledge));
  } catch (error) {
    console.error(error);
    yield put(updateKnowledgeError(error));
  }
}

/**
 * Draft modal saga
 */
export function* popUpSaga() {
  yield takeEvery(fetchCloudInit().type, fetchCloudSaga);
  yield takeEvery(updateKnowledgeInit().type, updateKnowledgeSaga);
}

