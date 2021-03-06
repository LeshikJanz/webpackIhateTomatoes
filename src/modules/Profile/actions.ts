import { createAction } from "utils/createAction";

export const getUserInit = createAction('GET_USER_INIT');
export const getUserDone = createAction('GET_USER_DONE');
export const getUserError = createAction('GET_USER_ERROR');

export const updateUserInit = createAction('UPDATE_USER_INIT');
export const updateUserDone = createAction('UPDATE_USER_DONE');
export const updateUserError = createAction('UPDATE_USER_ERROR');

export const handleProfileSidebar = createAction('HANDLE_PROFILE_SIDEBAR');
export const closeProfileSidebar = createAction('CLOSE_PROFILE_SIDEBAR');