import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchCloud } from "../../api/cloud";
import {
  fetchCloudInit, fetchCloudDone, fetchCloudError
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

export function* popUpSaga() {
  yield takeEvery(fetchCloudInit().type, fetchCloudSaga);
}

