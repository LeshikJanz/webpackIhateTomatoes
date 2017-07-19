import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchClouds } from "../../api/cloud";
import { fetchCloudsInit, fetchCloudsError, fetchCloudsDone, getCloudList } from "../actions";
import { ICloud } from "../../interfaces/index";

export function* fetchCloudsSaga() {
  try {
    const cloudList: ICloud[] = yield fetchClouds();
    //     dispatch({ type: GET_LISTS, lists, isFetching: true });
    yield put({ type: 'GET_LISTS', cloudList, isFetching: true });
    } catch (e) {
      yield put(fetchCloudsError(e));
    }
}

export function* cloudSaga() {
  yield takeEvery('GET_LISTS_START', fetchCloudsSaga);
}