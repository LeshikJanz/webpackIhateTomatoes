import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga";
import { NotificationManager } from 'react-notifications';
import { getUserDone, getUserError, getUserInit } from "./actions";
import { getUserById } from "api/user";
import { IUser } from "interfaces";

/**
 * Get User by id
 *
 * @param {string} payload - user id
 *
 * @returns {Iterator<Object | Task>}
 */
export function* getUserSaga({ payload }: string): Iterator<Object | Task> {
  try {
    const user: IUser = yield getUserById(payload);
    yield put(getUserDone(user));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(getUserError(error));
  }
}

/**
 * Profile saga
 */
export function* profileSaga() {
  yield takeEvery(getUserInit().type, getUserSaga);
}

