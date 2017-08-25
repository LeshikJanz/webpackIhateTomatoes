import { put, takeEvery, select } from 'redux-saga/effects'
import { getCloudsInit, getCloudsDone, getCloudsError } from "./actions";
import { Task } from "redux-saga";
import { fetchClouds, addNewCloud } from "api/cloud";
import { NotificationManager } from 'react-notifications';
import { ICloud } from "../../interfaces/index";
import { createCloudError, createCloudDone, createCloudInit } from "../actions";

export const getCloudFromState: any = (state): any => state.form.cloudForm.values;

export function* fetchCloudsSaga( action ): Iterator<Object | Task> {
  try {
    const clouds: ICloud[] = yield fetchClouds(action.payload);
    yield put(getCloudsDone(clouds));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(getCloudsError(error));
  }
}

export function* createCloudSaga(action): Iterator<Object | Task> {
  try {
    // const Cloud = yield select(getCloudFromState);
    const Cloud = action.payload;
    Cloud.accountId = localStorage.getItem('UserId');

    const newCloud = yield addNewCloud(Cloud);
    NotificationManager.success(`The cloud ${Cloud.name} has been successfully created`, 'Success!');
    yield put(createCloudDone(newCloud));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createCloudError(error));
  }
}

export function* skySaga() {
  yield [
    takeEvery(getCloudsInit().type, fetchCloudsSaga),
    takeEvery(createCloudInit().type, createCloudSaga),
  ]
}