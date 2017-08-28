import { put, takeEvery, select } from 'redux-saga/effects'
import { getCloudsInit, getCloudsDone, getCloudsError, updateLayout } from "./actions";
import { Task } from "redux-saga";
import { fetchSkiesByAccountId, addNewCloud, updateSkyLayout } from "api/cloud";
import { NotificationManager } from 'react-notifications';
import { ICloud } from "../../interfaces/index";
import { createCloudError, createCloudDone, createCloudInit } from "../actions";

export const getSkyFromState: any = (state): any => state.Sky;

export function* fetchSky( action ): Iterator<Object | Task> {
  try {
    const clouds: ICloud[] = yield fetchSkiesByAccountId(action.payload);
    yield put(getCloudsDone(clouds));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(getCloudsError(error));
  }
}

export function* createCloudSaga(action): Iterator<Object | Task> {
  try {
    const Cloud = action.payload;
    Cloud.accountId = localStorage.getItem('UserId');

    const Sky = yield select(getSkyFromState)
    Cloud.skyId = Sky.id;

    const newCloud = yield addNewCloud(Cloud);
    NotificationManager.success(`The cloud ${Cloud.name} has been successfully created`, 'Success!');
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
    yield updateSkyLayout(Sky.id, Sky);
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
  }
}

export function* skySaga() {
  yield [
    takeEvery(getCloudsInit().type, fetchSky),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(updateLayout().type, updateLayoutSaga),
  ]
}