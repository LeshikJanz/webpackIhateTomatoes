import { createAction } from "utils/createAction";

export const deleteCloudGroupInit = createAction('DELETE_CLOUD_GROUP_INIT');
export const deleteCloudGroupDone = createAction('DELETE_CLOUD_GROUP_DONE');
export const deleteCloudGroupError = createAction('DELETE_CLOUD_GROUP_ERROR');

export const updateAccountInit = createAction('UPDATE_ACCOUNT_INIT');
export const updateAccountDone = createAction('UPDATE_ACCOUNT_DONE');
export const updateAccountError = createAction('UPDATE_ACCOUNT_ERROR');

export const getCloudGroupsInit = createAction('GET_CLOUD_GROUPS_INIT');
export const getCloudGroupsDone = createAction('GET_CLOUD_GROUPS_DONE');
export const getCloudGroupsError = createAction('GET_CLOUD_GROUPS_ERROR');

export const sortCloudGroups = createAction('SORT_CLOUD_GROUPS');

