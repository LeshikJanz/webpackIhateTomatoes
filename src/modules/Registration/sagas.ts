import { put, takeEvery } from 'redux-saga/effects'
import { IUser } from "interfaces";
import { Task } from "redux-saga";
import {
  createAccountInit, createAccountDone, createAccountError, avatarUploadInit, avatarUploadDone, avatarUploadError,
} from "./actions";
import { register } from "api/auth";
import { change } from "redux-form";
import { uploadImage } from "api/user";
import { createCloudInit, handleModalAction } from "../actions";
import { DEFAULT_CLOUD, MODAL_TYPES } from "constants/index";
import { NotificationManager } from 'react-notifications';

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
    NotificationManager.success(`User ${user.name} has successfully registered. Please log in to start using system`, 'Success!');
    yield put(handleModalAction({
      type: MODAL_TYPES.successfulRegistration,
      title: 'Successful registration!',
      text: `You successfully registered account! 
      We've sent a message to your ${user.email}.
      Check out E-mail to find confirmation link to verify your account.`
    }))
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
    yield put(change("RegistrationForm", "avatar", response.data.link));
    yield put(change("ProfileForm", "avatar", response.data.link));
  } catch (error) {
    console.error(error);
    NotificationManager.error('Selected image is not valid. System accepts only JPEG, PNG, GIF formats', 'Fail');
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