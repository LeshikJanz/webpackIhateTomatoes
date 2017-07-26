import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchCloudGroups, updateCloudById, addNewCloud, addNewCloudGroup } from "../../api/cloud";
import {
  updateCloud, createCloudInit, createCloudError,
  createCloudGroupInit, createCloudGroupError, createCloudGroupDone, createCloudDone, fetchCloudError
} from "../actions";
import { ICloudGroup, ICloud } from "interfaces/index";
import { Task } from "redux-saga";
import { getListsStart } from "./actions/lists";
import { toastr } from 'react-redux-toastr'

export const getCloudFromState: any = (state): any => state.form.cloudForm.values;

export const getCloudGroupFromState: any = (state): any => state.form.cloudGroupForm.values;

export function* fetchCloudGroupList(): Iterator<Object | Task> {
  try {
    const lists: ICloudGroup[] = yield fetchCloudGroups();
    yield put({ type: 'GET_LISTS', lists, isFetching: true });
  } catch (e) {
    yield put(fetchCloudError(e));
  }
}

export function* updateCloudSaga({ payload }: ICloud): Iterator<Object | Task> {
  try {
    yield updateCloudById(payload.id, payload);
  } catch (e) {
    yield put(fetchCloudError(e));
  }
}

export function* createCloudSaga(): Iterator<Object | Task> {
  try {
    const Cloud = yield select(getCloudFromState);
    Cloud.accountId = localStorage.getItem('UserId');
    yield addNewCloud(Cloud.cloudId, Cloud);
    yield put(getListsStart());

    toastr.success('Success!', `The cloud ${Cloud.name} has been successfully created`);
    yield put(createCloudDone());
  } catch (e) {
    toastr.error('Error!', `The cloud has not been created! Connect to the administrator for more information, mail`);
    yield put(createCloudError(e));
  }
}

export function* createCloudGroupSaga(): Iterator<Object | Task> {
  try {
    const CloudGroup = yield select(getCloudGroupFromState);
    CloudGroup.accountId = localStorage.getItem('UserId');
    yield addNewCloudGroup(CloudGroup);
    yield put(getListsStart());

    toastr.success('Success!', `The cloud group ${CloudGroup.name} has been successfully created`);
    yield put(createCloudGroupDone());
  } catch (e) {
    toastr.error('Error!', `The cloud group has not been created! Connect to the administrator for more information, mail`);
    yield put(createCloudGroupError(e));
  }
}

export function* trelloSaga() {
  yield [
    takeEvery(getListsStart().type, fetchCloudGroupList),
    takeEvery(updateCloud().type, updateCloudSaga),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(createCloudGroupInit().type, createCloudGroupSaga)
  ]
}