import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchCloud, updateKnowledgeById } from "api/cloud";
import {
  fetchCloudInit, fetchCloudDone, fetchCloudError, updateKnowledge, updateKnowledgeError, saveKnowledge
} from "../actions";
import { Task } from "redux-saga";
import { ICloud, ISession } from "../../interfaces/index";
import { NotificationManager } from 'react-notifications';

const getFromState = (state: any) => state.Knowledge;

/**
 * Creates user session object
 *
 * @param {ICloud} cloud - cloud item
 *
 * @returns {ISession}
 */
const createUserSession = (cloud: ICloud): ISession => ({
  lastOpenedCloudId: cloud.id,
  accountId: cloud.accountId
});

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
    // TODO: figure out issues with authorization before working with sessions
    // yield addUserSession(cloud.accountId, createUserSession(cloud));

    yield put(fetchCloudDone(cloud));
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(fetchCloudError(error));
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
    NotificationManager.success(`Knowledge has been updated successfully`, 'Success!');
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(updateKnowledgeError(error));
  }
}

/**
 * Draft modal saga
 */
export function* popUpSaga() {
  yield takeEvery(fetchCloudInit().type, fetchCloudSaga);
  yield takeEvery(updateKnowledge().type, updateKnowledgeSaga);
}

