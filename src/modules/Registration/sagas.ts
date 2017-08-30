import { put, takeEvery, call, take } from 'redux-saga/effects'
import { ICloud, ISky, IUser } from "interfaces/index";
import { Task } from "redux-saga";
import { toastr } from 'react-redux-toastr'
import {
  createAccountInit, createAccountDone, createAccountError, avatarUploadInit, avatarUploadDone, avatarUploadError,
} from "./actions";
import { register } from "api/auth";
import { change } from "redux-form";
import { uploadImage } from "api/user";
import { NotificationManager } from 'react-notifications';
import { createSky } from "../../api/sky";
import { createCloudInit } from "../actions";

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

    const defaultSky: ISky = {
      zoom: 1,
      accountId: user.id
    };
    const newSky = yield createSky(defaultSky);

    const defaultCloud: ICloud = {
      name: 'Main',
      goal: "This is your first cloud. Let's try all Bighead functionality from here!",
      skyId: newSky.id
    };
    yield put(createCloudInit(defaultCloud));

    NotificationManager.success(`The user ${user.username} has been successfully created`, 'Success!');
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    console.error(error);
    yield put(createAccountError());
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
    yield put(avatarUploadError());
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