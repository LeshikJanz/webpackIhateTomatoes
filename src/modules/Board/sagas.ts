import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchCloudGroups, updateCloudById, addNewCloud } from "../../api/cloud";
import { fetchCloudsError, updateCloudGroup, updateCloud, createCloudInit, createCloudError } from "../actions";
import { ICloudGroup, ICloud } from "../../interfaces/index";

const getFromState = (state: any) => state.form.cloudForm.values;

export function* fetchCloudGroupList() {
  try {
    const lists: ICloudGroup[] = yield fetchCloudGroups();
    yield put({ type: 'GET_LISTS', lists, isFetching: true });
  } catch (e) {
    yield put(fetchCloudsError(e));
  }
}

export function* updateCloudSaga({ payload }: ICloud) {
  try {
    yield updateCloudById(payload.id, payload);
  } catch (e) {
    yield put(fetchCloudsError(e));
  }
}

export function* createCloudSaga(event: Event) {
  try {
    const cloud = yield select(getFromState);
    cloud.accountId = '596f648587f78b0998c35c25';
    yield addNewCloud(cloud.cloudId, cloud);
  } catch (e) {
    yield put(createCloudError(e));
  }
}

export function* trelloSaga() {
  yield [
    takeEvery('GET_LISTS_START', fetchCloudGroupList),
    takeEvery(updateCloud().type, updateCloudSaga),
    takeEvery(createCloudInit().type, createCloudSaga)
  ]
}