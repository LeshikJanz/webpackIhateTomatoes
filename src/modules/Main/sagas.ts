import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga";
import { ILogin, IToken, IUser } from "interfaces/index";
import { login, logOut, getUserById } from "api/auth";
import { push, replace } from "react-router-redux";
import { logOutInit, logOutError, logOutDone, loginDone, loginError, loginInit } from "./actions";
import { urls } from "../urls";
import { NotificationManager } from 'react-notifications';

/**
 * Log in saga handler
 *
 * @param {ILogin} payload - authorizing user
 *
 * @returns {Iterator<Object | Task>}
 */
export function* loginInitSaga({ payload } : ILogin): Iterator<Object | Task> {
  try {
    const token: IToken = yield login(payload);
    localStorage.setItem('Token', token.id);
    localStorage.setItem('UserId', token.userId);
    const user: IUser = yield getUserById(token.userId);
    localStorage.setItem('Account', JSON.stringify(user));

    yield put(loginDone(user));
    NotificationManager.success(`You are successfully logged in`, 'Success!');
    yield put(replace(urls.board));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(loginError());
  }
}

/**
 * Log out saga handler
 *
 * @returns {Iterator<Object | Task>}
 */
export function* logOutSaga(): Iterator<Object | Task> {
  try {
    yield logOut();
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');
    localStorage.removeItem('Account');

    yield put(logOutDone());
    NotificationManager.success(`You are successfully logged out`, 'Success!');
    yield put(push(urls.index));
  }catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(logOutError());
  }
}

/**
 * Authorization saga
 */
export function* loginSaga() {
  yield [
    takeEvery(loginInit().type, loginInitSaga),
    takeEvery(logOutInit().type, logOutSaga)
  ]
}

