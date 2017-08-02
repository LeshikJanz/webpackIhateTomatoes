import { put, takeEvery, call, take } from 'redux-saga/effects'
import { IUser } from "interfaces/index";
import { Task } from "redux-saga";
import { toastr } from 'react-redux-toastr'
import {
  createAccountInit, createAccountDone, createAccountError, avatarUploadInit,
} from "./actions";
import { register } from "api/auth";
import { change } from "redux-form";
import { uploadImage, updateUserById } from "api/user";
import { DEFAULT_CLOUD_GROUP } from "../../constants/index";
import { addNewCloudGroup } from "../../api/cloud";
import { NotificationManager } from 'react-notifications';
import { updateAccountInit, updateAccountDone } from "../Board/actions";

/**
 * Handle user registration
 *
 * @param {IUser} payload - user
 *
 * @returns {void}
 */
export function* createAccountSaga({ payload } : IUser): Iterator<Object | Task> {
  try {
    const user: IUser = yield register(payload);
    yield put(createAccountDone());
    NotificationManager.success(`The user ${user.username} has been successfully created`, 'Success!');
    yield addNewCloudGroup(Object.assign({}, DEFAULT_CLOUD_GROUP, { accountId: user.id }))
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createAccountError());
  }
}
/**
 * Update user
 *
 * @param {IUser} payload - user
 *
 * @returns {void}
 */
export function* updateAccountSaga({ payload } : IUser): Iterator<Object | Task> {
  try {
    yield updateUserById(payload.id, payload);
    yield put(updateAccountDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createAccountError());
  }
}

/**
 * Handle avatar uploading to the claudinary
 *
 * @returns {Iterator<Object | Task>}
 */
export function* avatarUploadSaga({ payload }: File): Iterator<Object | Task> {
  const response = yield uploadImage(payload);

  yield put(change("RegistrationForm", "avatar", response.data.secure_url))
}

/**
 * Registration saga
 */
export function* registrationSaga() {
  yield [
    takeEvery(createAccountInit().type, createAccountSaga),
    takeEvery(updateAccountInit().type, updateAccountSaga),
    takeEvery(avatarUploadInit().type, avatarUploadSaga)
  ]
}