import { getUsersInit, getUsersDone, getUsersError } from "./actions";
import { Task } from "redux-saga";
import { fetchUsers } from "../../api/user";
import { IUser } from "../../interfaces/index";
import { put, takeEvery } from "redux-saga/effects";
import { toastr } from 'react-redux-toastr'

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
  }catch (e) {
    toastr.error('Error!', `Error with getting user list`);
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