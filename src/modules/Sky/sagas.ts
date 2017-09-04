import { put, takeEvery, select } from 'redux-saga/effects'
import {
  getCloudsInit, getCloudsDone, getCloudsError, deleteCloudInit,
  deleteCloudError, deleteCloudDone, updateLayoutAction
} from "./actions";
import { Task } from "redux-saga";
import { addNewCloud, deleteCloud, fetchClouds, updateLayout, fetchAccountWithClouds } from "api/cloud";
import { NotificationManager } from 'react-notifications';
import { createCloudError, createCloudDone, createCloudInit } from "../actions";

export const getSkyFromState: any = (state): any => state.Sky;

export function* fetchAccountWithCloudsSaga(): Iterator<Object | Task> {
  try {
    const sky = yield fetchAccountWithClouds();
    yield put(getCloudsDone(sky));
  } catch (error) {
    yield put(getCloudsError(error))
  }
}

export function* createCloudSaga(action): Iterator<Object | Task> {
  try {
    const Cloud = action.payload;
    Cloud.accountId = Cloud.accountId || localStorage.getItem('UserId');

    const newCloud = yield addNewCloud(Cloud);
    NotificationManager.success(`The cloud ${newCloud.name} has been successfully created`, 'Success!');
    yield put(createCloudDone(newCloud));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createCloudError(error));
  }
}

export function* updateLayoutSaga({ payload }): Iterator<Object | Task> {
  try {
    const Sky = yield select(getSkyFromState);
    Sky.layout = payload;
    yield updateLayout(Sky);
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
  }
}

export function* deleteCloudSaga({ payload }): Iterator<Object | Task> {
  try {
    yield deleteCloud(payload);
    yield put(getCloudsInit());
    NotificationManager.success(`The cloud has been successfully deleted`, 'Success!');
    yield put(deleteCloudDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(deleteCloudError(error));
  }
}

export function* skySaga() {
  yield [
    takeEvery(getCloudsInit().type, fetchAccountWithCloudsSaga),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(updateLayoutAction().type, updateLayoutSaga),
    takeEvery(deleteCloudInit().type, deleteCloudSaga),
  ]
}