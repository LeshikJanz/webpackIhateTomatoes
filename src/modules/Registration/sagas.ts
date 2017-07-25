import { put, takeEvery } from 'redux-saga/effects'
import { IUser } from "interfaces/index";
import { Task } from "redux-saga";
import { toastr } from 'react-redux-toastr'
import { createAccountInit, createAccountDone, createAccountError } from "./actions";
import { register } from "../../api/auth";

/**
 * Handle user registration
 *
 * @param {IUser} payload - user
 *
 * @returns {Iterator<Object | Task>}
 */
export function* createAccountSaga({ payload } : IUser): Iterator<Object | Task> {
  try {
    const user: IUser = yield register(payload);
    yield put(createAccountDone());
    toastr.success('Success!', `The user ${user.username} has been successfully created`);
  } catch (e) {
    toastr.error('Error!', `The user has not been created!`);
    yield put(createAccountError());
  }
}

/**
 * Registration saga
 */
export function* registrationSaga() {
  yield [
    takeEvery(createAccountInit().type, createAccountSaga)
  ]
}