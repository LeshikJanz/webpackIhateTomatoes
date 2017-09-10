import { put, takeEvery, select } from 'redux-saga/effects'
import { Task } from "redux-saga";
import { updateCloudInit, updateCloudError, updateCloudDone } from "modules/actions";
import { updateCloudById } from "api/cloud";

const getCloudFromState = (state: any) => state.Cloud;

export function* updateCloudSaga(): Iterator<Object | Task> {
  try {
    const cloud = yield select(getCloudFromState);
    const updatedCloud = yield updateCloudById(cloud.id, cloud);
    yield put(updateCloudDone(updatedCloud));
  } catch (e) {
    yield put(updateCloudError(e));
  }
}

export function* knowledgeSaga() {
  yield takeEvery(updateCloudInit().type, updateCloudSaga);
}
