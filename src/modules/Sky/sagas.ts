import { put, takeEvery, select } from 'redux-saga/effects'
import {
  getCloudsInit, getCloudsDone, getCloudsError, updateLayout, deleteCloudInit,
  deleteCloudError, deleteCloudDone
} from "./actions";
import { Task } from "redux-saga";
import { fetchSkiesByAccountId, addNewCloud, updateSkyLayout, deleteCloud } from "api/cloud";
import { NotificationManager } from 'react-notifications';
import { ICloud, ISky } from "../../interfaces/index";
import { createCloudError, createCloudDone, createCloudInit } from "../actions";

export const getSkyFromState: any = (state): any => state.Sky;

export function* fetchSky(action): Iterator<Object | Task> {
  try {
    const sky: ISky = yield fetchSkiesByAccountId(action.payload);
    yield put(getCloudsDone(sky));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(getCloudsError(error));
  }
}

export function* createCloudSaga(action): Iterator<Object | Task> {
  try {
    const Cloud = action.payload;
    Cloud.accountId = Cloud.accountId || localStorage.getItem('UserId');

    const Sky = yield select(getSkyFromState)
    Cloud.skyId = Cloud.skyId || Sky.id;

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
    if ( Sky.id ) {
      yield updateSkyLayout(Sky.id, Sky);
    }
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
    takeEvery(getCloudsInit().type, fetchSky),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(updateLayout().type, updateLayoutSaga),
    takeEvery(deleteCloudInit().type, deleteCloudSaga),
  ]
}