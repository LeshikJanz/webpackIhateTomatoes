import { put, takeEvery, select } from 'redux-saga/effects'
import {
  fetchCloudGroups, updateCloudById, addNewCloud, addNewCloudGroup, deleteCloudGroup,
  deleteCloud
} from "api/cloud";
import {
  updateCloud, createCloudInit, createCloudError,
  createCloudGroupInit, createCloudGroupError, createCloudGroupDone, createCloudDone, fetchCloudError
} from "../actions";
import { ICloudGroup, ICloud } from "interfaces/index";
import { Task } from "redux-saga";
import { getListsStart } from "./actions/lists";
import { NotificationManager } from 'react-notifications';
import {
  deleteCloudGroupInit, deleteCloudGroupDone, deleteCloudGroupError, deleteCloudInit,
  deleteCloudDone, deleteCloudError
} from "./actions";

export const getCloudFromState: any = (state): any => state.form.cloudForm.values;

export const getCloudGroupFromState: any = (state): any => state.form.cloudGroupForm.values;

/**
 * Fetching cloud groups with appropriate clouds
 *
 * @param {string} payload - user id
 *
 * @returns {Iterator<Object | Task>}
 */
export function* fetchCloudGroupList({ payload }?: string): Iterator<Object | Task> {
  try {
    const lists: ICloudGroup[] = yield fetchCloudGroups(payload);
    yield put({ type: 'GET_LISTS', lists, isFetching: true });
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(fetchCloudError(error));
  }
}

export function* updateCloudSaga({ payload }: ICloud): Iterator<Object | Task> {
  try {
    yield updateCloudById(payload.id, payload);
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(fetchCloudError(error));
  }
}

export function* createCloudSaga(): Iterator<Object | Task> {
  try {
    const Cloud = yield select(getCloudFromState);
    Cloud.accountId = localStorage.getItem('UserId');
    yield addNewCloud(Cloud.cloudId, Cloud);
    yield put(getListsStart());
    NotificationManager.success(`The cloud ${Cloud.name} has been successfully created`, 'Success!');
    yield put(createCloudDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createCloudError(error));
  }
}

export function* createCloudGroupSaga(): Iterator<Object | Task> {
  try {
    const CloudGroup = yield select(getCloudGroupFromState);
    CloudGroup.accountId = localStorage.getItem('UserId');
    yield addNewCloudGroup(CloudGroup);
    yield put(getListsStart());

    NotificationManager.success(`The cloud group ${CloudGroup.name} has been successfully created`, 'Success!');
    yield put(createCloudGroupDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createCloudGroupError(error));
  }
}

export function* deleteCloudGroupSaga({ payload }: string ): Iterator<Object | Task> {
  try {
    yield deleteCloudGroup(payload);
    NotificationManager.success(`The cloud group has been successfully deleted`, 'Success!');

    yield put(getListsStart());
    yield put(deleteCloudGroupDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(deleteCloudGroupError(error));
  }
}

export function* deleteCloudSaga({ payload }: string ): Iterator<Object | Task> {
  try {
    yield deleteCloud(payload);
    NotificationManager.success(`The cloud has been successfully deleted`, 'Success!');
    yield put(getListsStart());
    yield put(deleteCloudDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(deleteCloudError(error));
  }
}

export function* trelloSaga() {
  yield [
    takeEvery(getListsStart().type, fetchCloudGroupList),
    takeEvery(updateCloud().type, updateCloudSaga),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(createCloudGroupInit().type, createCloudGroupSaga),
    takeEvery(deleteCloudGroupInit().type, deleteCloudGroupSaga),
    takeEvery(deleteCloudInit().type, deleteCloudSaga),
  ]
}