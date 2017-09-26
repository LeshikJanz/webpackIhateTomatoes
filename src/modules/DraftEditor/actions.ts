import { createAction } from "utils/createAction";

export const createRenewerInit = createAction('CREATE_RENEWER_INIT');
export const createRenewerDone = createAction('CREATE_RENEWER_DONE');
export const createRenewerError = createAction('CREATE_RENEWER_ERROR');

export const startRecognition = createAction('START_RECOGNITION');
export const stopRecognition = createAction('STOP_RECOGNITION');
export const handlePlayer = createAction('HANDLE_PLAYER');
export const handleCollapsePlayer = createAction('HANDLE_COLLAPSE_PLAYER');
export const changeRecognitionLanguage = createAction('CHANGE_RECOGNITION_LANGUAGE');
