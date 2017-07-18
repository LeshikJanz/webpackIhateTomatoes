import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchClouds } from "../../api/cloud";
import { fetchCloudsInit, fetchCloudsError, fetchCloudsDone } from "../actions";

export function* fetchCloudsSaga() {
  try {
    const cloudList = yield fetchClouds();
      yield put(fetchCloudsDone(cloudList));
    } catch (e) {
      yield put(fetchCloudsError(e));
    }
}

export function* cloudSaga() {
  yield takeEvery(fetchCloudsInit().type, fetchCloudsSaga);
}