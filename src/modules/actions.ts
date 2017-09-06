import { createAction } from "../utils/createAction";

export const addTag = createAction('ADD_TAG');

export const openEditor = createAction('OPEN_EDITOR');
export const closeEditor = createAction('CLOSE_EDITOR');
export const handleModalAction = createAction('HANDLE_MODAL');

export const handleConfirmModalAction = createAction('HANDLE_CONFIRM_MODAL');

export const fetchCloudInit = createAction('FETCH_CLOUD_INIT');
export const fetchCloudDone = createAction('FETCH_CLOUD_DONE');
export const fetchCloudError = createAction('FETCH_CLOUD_ERROR');
export const createCloudInit = createAction('CREATE_CLOUD_INIT');
export const createCloudDone = createAction('CREATE_CLOUD_DONE');
export const createCloudError = createAction('CREATE_CLOUD_ERROR');
export const updateCloudInit = createAction('UPDATE_CLOUD_INIT');
export const updateCloudDone = createAction('UPDATE_CLOUD_DONE');
export const updateCloudError = createAction('UPDATE_CLOUD_ERROR');
export const deleteCloudInit = createAction('DELETE_CLOUD_INIT');
export const deleteCloudDone = createAction('DELETE_CLOUD_DONE');
export const deleteCloudError = createAction('DELETE_CLOUD_ERROR');

export const createNewKnowledgeInit = createAction('CREATE_NEW_KNOWLEDGE_INIT');
export const createNewKnowledgeDone = createAction('CREATE_NEW_KNOWLEDGE_DONE');
export const createNewKnowledgeError = createAction('CREATE_NEW_KNOWLEDGE_ERROR');

export const deleteKnowledgeInit = createAction('DELETE_KNOWLEDGE_INIT');
export const deleteKnowledgeDone = createAction('DELETE_KNOWLEDGE_DONE');
export const deleteKnowledgeError = createAction('DELETE_KNOWLEDGE_ERROR');

export const openKnowledge = createAction('OPEN_KNOWLEDGE');
export const clearKnowledge = createAction('CLEAR_KNOWLEDGE');
export const updateKnowledge = createAction('UPDATE_KNOWLEDGE');
export const updateKnowledgeError = createAction('UPDATE_KNOWLEDGE_ERROR');
export const editKnowledge = createAction('EDIT_KNOWLEDGE');
export const saveKnowledge = createAction('SAVE_KNOWLEDGE');
export const updateCloudKnowledges = createAction('UPDATE_CLOUD');
export const changeKnowledgeName = createAction("CHANGE_KNOWLEDGE_NAME");


