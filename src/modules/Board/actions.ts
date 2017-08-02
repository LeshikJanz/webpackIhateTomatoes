import { createAction } from "utils/createAction";

export const deleteCloudInit = createAction('DELETE_CLOUD_INIT');
export const deleteCloudDone = createAction('DELETE_CLOUD_DONE');
export const deleteCloudError = createAction('DELETE_CLOUD_ERROR');

export const deleteCloudGroupInit = createAction('DELETE_CLOUD_GROUP_INIT');
export const deleteCloudGroupDone = createAction('DELETE_CLOUD_GROUP_DONE');
export const deleteCloudGroupError = createAction('DELETE_CLOUD_GROUP_ERROR');

export const updateAccountInit = createAction('UPDATE_ACCOUNT_INIT');
export const updateAccountDone = createAction('UPDATE_ACCOUNT_DONE');
export const updateAccountError = createAction('UPDATE_ACCOUNT_ERROR');