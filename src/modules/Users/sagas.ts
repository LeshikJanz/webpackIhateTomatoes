import { getUsersInit, getUsersDone, getUsersError } from "./actions";
import { Task } from "redux-saga";
import { fetchUsers } from "../../api/user";
import { IUser } from "interfaces/index";
import { put, select, takeEvery } from "redux-saga/effects";
import { NotificationManager } from 'react-notifications';

const getSearchFilterFromState: any = (state): any => state.form && state.form.UserSearchForm && state.form.UserSearchForm.values;

/**
 * Get user list saga handler
 *
 * @returns {Iterator<Object | Task>}
 */
export function* getUsersSaga(): Iterator<Object | Task> {
  try {
    const filter = yield select(getSearchFilterFromState);
    const users: IUser[] = yield fetchUsers(filter);
    yield put(getUsersDone(users));
  } catch ({ error }) {
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