import { createAction } from "utils/createAction";

export const getCloudsInit = createAction('GET_CLOUDS_INIT');
export const getCloudsDone = createAction('GET_CLOUDS_DONE');
export const getCloudsError = createAction('GET_CLOUDS_ERROR');

export const deleteCloudInit = createAction('DELETE_CLOUD_INIT');
export const deleteCloudDone = createAction('DELETE_CLOUD_DONE');
export const deleteCloudError = createAction('DELETE_CLOUD_ERROR');

export const updateLayout = createAction('UPDATE_LAYOUT');
export const handleZoom = createAction('HANDLE_ZOOM');