import { put, takeEvery } from 'redux-saga/effects'
import { loginInit, loginDone, loginError } from "../actions";
import { Task } from "redux-saga";
import { ILogin, IToken } from "../../interfaces/index";
import { login } from "api/auth";
import { push, replace } from "react-router-redux";

export function* loginInitSaga({ payload } : ILogin): Iterator<Object | Task> {
  try {
    const token: IToken = yield login(payload);
    localStorage.setItem('Token', token.id);
    localStorage.setItem('UserId', token.userId);

    yield put(loginDone());
    yield put(replace('/board'));
  } catch (e) {
    yield put(loginError());
  }
}

export function* loginSaga() {
  yield takeEvery(loginInit().type, loginInitSaga);
}

