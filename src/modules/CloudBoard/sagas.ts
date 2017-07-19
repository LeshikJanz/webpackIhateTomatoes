import { put, takeEvery } from 'redux-saga/effects'
import { fetchCloudGroups, updateCloudById } from "../../api/cloud";
import { fetchCloudsError, updateCloudGroup, updateCloud } from "../actions";
import { ICloudGroup, ICloud } from "../../interfaces/index";

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

export function* trelloSaga() {
  yield [
    takeEvery('GET_LISTS_START', fetchCloudGroupList),
    takeEvery(updateCloud().type, updateCloudSaga)
  ]
}