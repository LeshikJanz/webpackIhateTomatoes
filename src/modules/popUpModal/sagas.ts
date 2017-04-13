import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchCloud, fetchKnowledge } from "../../api/cloud";
import {
  fetchCloudInit, fetchCloudDone, fetchCloudError, fetchKnowledgeInit, fetchKnowledgeDone,
  fetchKnowledgeError
} from "../actions";
const currentCloudId = "58ee2eb68859711d95b30194";

export function* fetchCloudSaga() {
  try {
    const cloudListKnowledges = yield fetchCloud(currentCloudId);
    yield put(fetchCloudDone(cloudListKnowledges));
  } catch (e) {
    yield put(fetchCloudError(e));
  }
}

export function* fetchKnowledgeSaga({payload}: any) {
  try {
    const knowledge = yield fetchKnowledge(payload.id);
    console.log("knowledge");
    console.log(knowledge);
    yield put(fetchKnowledgeDone(knowledge));
  } catch (e) {
    console.log("e");
    console.log(e);
    yield put(fetchKnowledgeError(e));
  }
}

export function* popUpSaga() {
  yield takeEvery(fetchCloudInit().type, fetchCloudSaga);
  yield takeEvery(fetchKnowledgeInit().type, fetchKnowledgeSaga);
}

