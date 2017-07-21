import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchCloud, updateKnowledgeById } from "../../api/cloud";
import {
  fetchCloudInit, fetchCloudDone, fetchCloudError, updateKnowledge, updateKnowledgeError, saveKnowledge
} from "../actions";
import { currentCloudId } from "../jqueryCloud/constants/index";
import { Task } from "redux-saga";

const getFromState = (state: any) => state.Knowledge;

export function* fetchCloudSaga({ payload } : string): Iterator<Object | Task> {
  try {
    const cloudListKnowledges = yield fetchCloud(payload);

    yield put(fetchCloudDone(cloudListKnowledges));
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

