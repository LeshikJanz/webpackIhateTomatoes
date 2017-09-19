import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga";
import { NotificationManager } from 'react-notifications';
import { getUserDone, getUserError, getUserInit, updateUserDone, updateUserError, updateUserInit } from "./actions";
import { getUserById, updateUserById } from "api/user";
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
 * Update User by id
 *
 * @param {IUser} payload - user
 *
 * @returns {Iterator<Object | Task>}
 */
export function* updateUserSaga({ payload }: IUser): Iterator<Object | Task> {
  try {
    yield updateUserById(payload.id, payload);
    NotificationManager.success('Successfully updated', 'Success!');
    yield put(updateUserDone());
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(updateUserError(error));
  }
}

/**
 * Profile saga
 */
export function* profileSaga() {
  yield [
    takeEvery(getUserInit().type, getUserSaga),
    takeEvery(updateUserInit().type, updateUserSaga),
  ]
}

