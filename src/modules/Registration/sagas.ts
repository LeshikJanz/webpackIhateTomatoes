import { put, takeEvery, call, take } from 'redux-saga/effects'
import { IUser } from "interfaces/index";
import { Task } from "redux-saga";
import { toastr } from 'react-redux-toastr'
import {
  createAccountInit, createAccountDone, createAccountError, avatarUploadInit,
  avatarUploadDone
} from "./actions";
import { register } from "../../api/auth";
import { change } from "redux-form";
import { uploadImage } from "../../api/user";

/**
 * Handle user registration
 *
 * @param {IUser} payload - user
 *
 * @returns {Iterator<Object | Task>}
 */
export function* createAccountSaga( { payload } : IUser ): Iterator<Object | Task> {
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
 * Handle avatar uploading to the claudinary
 *
 * @returns {Iterator<Object | Task>}
 */
export function* avatarUploadSaga( { payload }: File ): Iterator<Object | Task> {
  const response = yield uploadImage(payload);

  yield put(change("RegistrationForm", "dropzone", response.data.secure_url))

}

/**
 * Registration saga
 */
export function* registrationSaga() {
  yield [
    takeEvery(createAccountInit().type, createAccountSaga),
    takeEvery(avatarUploadInit().type, avatarUploadSaga)
  ]
}