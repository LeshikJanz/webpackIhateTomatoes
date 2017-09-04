import { createAction } from "utils/createAction";

export const loginInit = createAction('LOGIN_INIT');
export const loginDone = createAction('LOGIN_DONE');
export const loginError = createAction('LOGIN_ERROR');

export const logOutInit = createAction('LOG_OUT_INIT');
export const logOutDone = createAction('LOG_OUT_DONE');
export const logOutError = createAction('LOG_OUT_ERROR');
