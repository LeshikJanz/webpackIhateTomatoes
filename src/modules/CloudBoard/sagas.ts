import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchClouds } from "../../api/cloud";
import { fetchCloudsInit, fetchCloudsError, fetchCloudsDone, getCloudList } from "../actions";
import { ICloud } from "../../interfaces/index";

export function* fetchCloudsSaga() {
  try {
    const cloudList: ICloud[] = yield fetchClouds();
    const lists = [{
      id: 0,
      name: 'Cloud Category 1',
      cards: [cloudList[0], cloudList[1]]
    },
      {
        id: 1,
        name: 'Cloud Category 2',
        cards: [cloudList[2], cloudList[3]]
      },
    ];
    //     dispatch({ type: GET_LISTS, lists, isFetching: true });
    yield put({ type: 'GET_LISTS', lists, isFetching: true });
  } catch (e) {
    yield put(fetchCloudsError(e));
  }
}

export function* trelloSaga() {
  yield takeEvery('GET_LISTS_START', fetchCloudsSaga);
}