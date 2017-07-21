import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchCloud, updateKnowledgeById } from "../../api/cloud";
import {
  fetchCloudInit, fetchCloudDone, fetchCloudError, updateKnowledge, updateKnowledgeError, saveKnowledge
} from "../actions";
import { currentCloudId } from "../jqueryCloud/constants/index";
import { Task } from "redux-saga";
import { addUserSession } from "../../api/session";
import { ICloud, ISession } from "../../interfaces/index";

const getFromState = (state: any) => state.Knowledge;

const createUserSession = (cloud: ICloud): ISession => ({
  lastOpenedCloudId: cloud.id,
  accountId: cloud.accountId
})


export function* fetchCloudSaga({ payload } : string): Iterator<Object | Task> {
  try {
    const cloud: ICloud = yield fetchCloud(payload);
    yield addUserSession(cloud.accountId, createUserSession(cloud));

    yield put(fetchCloudDone(cloud));
  } catch (e) {
    yield put(fetchCloudError(e));
  }
}

export function* updateKnowledgeSaga(): Iterator<Object | Task> {
  try {
    const knowledge = yield select(getFromState);
    yield updateKnowledgeById(knowledge.id, knowledge);
    yield put(saveKnowledge());
  } catch (e) {
    yield put(updateKnowledgeError(e));
  }
}

export function* popUpSaga() {
  yield takeEvery(fetchCloudInit().type, fetchCloudSaga);
  yield takeEvery(updateKnowledge().type, updateKnowledgeSaga);
}

