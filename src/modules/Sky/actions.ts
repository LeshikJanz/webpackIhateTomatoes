import { createAction } from "utils/createAction";

export const getCloudsInit = createAction('GET_CLOUDS_INIT');
export const getCloudsDone = createAction('GET_CLOUDS_DONE');
export const getCloudsError = createAction('GET_CLOUDS_ERROR');

export const updateLayout = createAction('UPDATE_LAYOUT');
export const handleZoom = createAction('HANDLE_ZOOM');