import { createAction } from "utils/createAction";

export const getCloudsInit = createAction('GET_CLOUDS_INIT');
export const getCloudsDone = createAction('GET_CLOUDS_DONE');
export const getCloudsError = createAction('GET_CLOUDS_ERROR');

export const updateLayoutAction = createAction('UPDATE_LAYOUT');
export const handleZoom = createAction('HANDLE_ZOOM');

export const updateSettingsInit = createAction('UPDATE_SETTINGS_INIT');
export const updateSettingsDone = createAction('UPDATE_SETTINGS_DONE');
export const updateSettingsError = createAction('UPDATE_SETTINGS_ERROR');