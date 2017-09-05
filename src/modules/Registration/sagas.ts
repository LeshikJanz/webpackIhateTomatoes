import { put, takeEvery, call, take } from 'redux-saga/effects'
import { IUser } from "interfaces";
import { Task } from "redux-saga";
import {
  createAccountInit, createAccountDone, createAccountError, avatarUploadInit, avatarUploadDone, avatarUploadError,
} from "./actions";
import { register } from "api/auth";
import { change } from "redux-form";
import { uploadImage } from "api/user";
import { createCloudInit } from "../actions";
import { DEFAULT_CLOUD } from "constants/index";

/**
 * Handle user registration
 *
 * @param {IUser} payload - user
 *
 * @returns {void}
 */
export function* createAccountSaga({ payload }: IUser): Iterator<Object | Task> {
  try {
    payload.avatar = payload.avatar || 'assets/img/default-user-icon.png';
    const user: IUser = yield register(payload);
    yield put(createAccountDone());
    const defaultCloud = Object.assign({}, DEFAULT_CLOUD, { accountId: user.id });
    yield put(createCloudInit(defaultCloud));
  } catch (error) {
    console.error(error);
    yield put(createAccountError(error));
  }
}

/**
 * Handle avatar uploading to the claudinary
 *
 * @returns {Iterator<Object | Task>}
 */
export function* avatarUploadSaga({ payload }: File): Iterator<Object | Task> {
  try {
    const response = yield uploadImage(payload);
    yield put(avatarUploadDone());
    yield put(change("RegistrationForm", "avatar", response.data.secure_url))
  } catch (error) {
    console.error(error);
    yield put(avatarUploadError(error));
  }
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