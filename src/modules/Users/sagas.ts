import { getUsersInit, getUsersDone, getUsersError } from "./actions";
import { Task } from "redux-saga";
import { fetchUsers } from "../../api/user";
import { IUser } from "interfaces/index";
import { put, takeEvery } from "redux-saga/effects";
import { NotificationManager } from 'react-notifications';

/**
 * Get user list saga handler
 *
 * @param {string} payload - username filter string
 *
 * @returns {Iterator<Object | Task>}
 */
export function* getUsersSaga({ payload }: string): Iterator<Object | Task> {
  try {
    const users: IUser[] = yield fetchUsers(payload);
    yield put(getUsersDone(users));
  }catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    put(getUsersError());
  }
}

/**
 * Users saga
 */
export function* usersSaga() {
  yield [
    takeEvery(getUsersInit().type, getUsersSaga)
  ]
}