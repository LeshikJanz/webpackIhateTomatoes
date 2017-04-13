import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchCloud, updateKnowledgeById } from "../../api/cloud";
import {
  fetchCloudInit, fetchCloudDone, fetchCloudError, updateKnowledge, updateKnowledgeError, saveKnowledge
} from "../actions";
import { currentCloudId } from "../jqueryCloud/constants/index";

const getFromState = (state: any) => state.Knowledge;

export function* fetchCloudSaga() {
  try {
    const cloudListKnowledges = yield fetchCloud(currentCloudId);
    yield put(fetchCloudDone(cloudListKnowledges));
  } catch (e) {
    yield put(fetchCloudError(e));
  }
}

export function* updateKnowledgeSaga() {
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

