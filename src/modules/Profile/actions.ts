import { createAction } from "utils/createAction";

export const getUserInit = createAction('GET_USER_INIT');
export const getUserDone = createAction('GET_USER_DONE');
export const getUserError = createAction('GET_USER_ERROR');