import { createAction } from "utils/createAction";

export const logOutInit = createAction('LOG_OUT_INIT');
export const logOutDone = createAction('LOG_OUT_DONE');
export const logOutError = createAction('LOG_OUT_ERROR');
