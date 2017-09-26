import { put, takeEvery, select } from 'redux-saga/effects'
import {
  getCloudsInit, getCloudsDone, getCloudsError, updateLayoutAction, updateSettingsInit, updateSettingsDone,
  updateSettingsError
} from "./actions";
import { Task } from "redux-saga";
import { addNewCloud, deleteCloud, updateLayout, fetchAccountWithClouds } from "api/cloud";
import {
  createCloudError, createCloudDone, createCloudInit, deleteCloudInit, deleteCloudError,
  deleteCloudDone
} from "../actions";
import { NotificationManager } from 'react-notifications';
import { updateUserById } from "api/user";
import { initialize } from "redux-form";

export const getSkyFromState: any = (state): any => state.Sky;
const getSettingsFromState = (state: any) => state.form.SettingsForm.values;

export function* fetchAccountWithCloudsSaga(action): Iterator<Object | Task> {
  try {
    const sky = yield fetchAccountWithClouds(action.payload || localStorage.getItem('UserId'));
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
    yield put(createCloudDone(newCloud));
  } catch (error) {
    console.error(error);
    yield put(createCloudError(error));
  }
}

export function* updateLayoutSaga({ payload }): Iterator<Object | Task> {
  try {
    const Sky = yield select(getSkyFromState);
    Sky.layout = payload;
    yield updateLayout(Sky);
  } catch (error) {
    console.error(error);
  }
}

export function* deleteCloudSaga({ payload }): Iterator<Object | Task> {
  try {
    yield deleteCloud(payload);
    yield put(getCloudsInit());
    yield put(deleteCloudDone());
  } catch (error) {
    console.error(error);
    yield put(deleteCloudError(error));
  }
}

export function* updateSettingsSaga(): Iterator<Object | Task> {
  try {
    const settings = yield select(getSettingsFromState);
    const updatedUser = yield updateUserById(localStorage.getItem('UserId'), { settings });
    localStorage.setItem('Account', JSON.stringify(updatedUser));
    yield put(updateSettingsDone());
    yield put(initialize('SettingsForm', updatedUser.settings));
    NotificationManager.success('Success!', 'Settings has been updated successfully');
  } catch (error) {
    console.error(error);
    NotificationManager.error('Error!', 'Settings has not been updated');
    yield put(updateSettingsError())
  }
}

export function* skySaga() {
  yield [
    takeEvery(getCloudsInit().type, fetchAccountWithCloudsSaga),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(updateLayoutAction().type, updateLayoutSaga),
    takeEvery(deleteCloudInit().type, deleteCloudSaga),
    takeEvery(updateSettingsInit().type, updateSettingsSaga),
  ]
}