import { put, takeEvery, select } from 'redux-saga/effects'
import { getCloudsInit, getCloudsDone, getCloudsError } from "./actions";
import { Task } from "redux-saga";
import { fetchClouds } from "api/cloud";
import { NotificationManager } from 'react-notifications';
import { ICloud } from "../../interfaces/index";

export function* fetchCloudsSaga( action ): Iterator<Object | Task> {
  try {
    const clouds: ICloud[] = yield fetchClouds(action.payload);
    yield put(getCloudsDone(clouds));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(getCloudsError(error));
  }
}

export function* skySaga() {
  yield [
    takeEvery(getCloudsInit().type, fetchCloudsSaga)
  ]
}