import { createAction } from "../utils/createAction";

export const addTag = createAction('ADD_TAG');
export const changeModalStatus = createAction('CHANGE_MODAL_STATUS');
export const fetchCloudInit = createAction('FETCH_CLOUD_INIT');
export const fetchCloudDone = createAction('FETCH_CLOUD_DONE');
export const fetchCloudError = createAction('FETCH_CLOUD_ERROR');
export const fetchKnowledgeInit = createAction('FETCH_CLOUD_INIT');
export const fetchKnowledgeDone = createAction('FETCH_CLOUD_DONE');
export const fetchKnowledgeError = createAction('FETCH_CLOUD_ERROR');
export const openKnowledge = createAction('OPEN_KNOWLEDGE');
export const saveKnowledge = createAction('SAVE_KNOWLEDGE');
