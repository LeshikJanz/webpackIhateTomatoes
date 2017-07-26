import { createAction } from "utils/createAction";

export const getUsersInit = createAction('GET_USERS_INIT');
export const getUsersDone = createAction('GET_USERS_DONE');
export const getUsersError = createAction('GET_USERS_ERROR');

export const getMostPopularUsers = createAction('GET_MOST_POPULAR_USERS');
