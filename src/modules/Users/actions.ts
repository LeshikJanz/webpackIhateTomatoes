import { createAction } from "utils/createAction";

export const getUsersInit = createAction('GET_USERS_INIT');
export const getUsersDone = createAction('GET_USERS_DONE');
export const getUsersError = createAction('GET_USERS_ERROR');

export const getUsersByFilterInit = createAction('GET_USERS_BY_FILTER_INIT');
export const getUsersByFilterDone = createAction('GET_USERS_BY_FILTER_DONE');
export const getUsersByFilterError = createAction('GET_USERS_BY_FILTER_ERROR');

export const getMostPopularUsers = createAction('GET_MOST_POPULAR_USERS');
