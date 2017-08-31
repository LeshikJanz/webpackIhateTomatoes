import { createAction } from "../utils/createAction";

export const addTag = createAction('ADD_TAG');

export const openEditor = createAction('OPEN_EDITOR');
export const closeEditor = createAction('CLOSE_EDITOR');
export const handleModalAction = createAction('HANDLE_MODAL');

export const handleConfirmModalAction = createAction('HANDLE_CONFIRM_MODAL');

export const viewCloud = createAction('VIEW_CLOUD');
export const fetchCloudInit = createAction('FETCH_CLOUD_INIT');
export const fetchCloudDone = createAction('FETCH_CLOUD_DONE');
export const fetchCloudError = createAction('FETCH_CLOUD_ERROR');
export const createCloudInit = createAction('CREATE_CLOUD_INIT');
export const createCloudDone = createAction('CREATE_CLOUD_DONE');
export const createCloudError = createAction('CREATE_CLOUD_ERROR');

export const updateCloud = createAction('UPDATE_CLOUD');

export const createCloudGroupInit = createAction('CREATE_CLOUD_GROUP_INIT');
export const createCloudGroupDone = createAction('CREATE_CLOUD_GROUP_DONE');
export const createCloudGroupError = createAction('CREATE_CLOUD_GROUP_ERROR');

export const createNewKnowledgeInit = createAction('CREATE_NEW_KNOWLEDGE_INIT');
export const createNewKnowledgeDone = createAction('CREATE_NEW_KNOWLEDGE_DONE');
export const createNewKnowledgeError = createAction('CREATE_NEW_KNOWLEDGE_ERROR');

export const openKnowledge = createAction('OPEN_KNOWLEDGE');
export const clearKnowledge = createAction('CLEAR_KNOWLEDGE');
export const updateKnowledge = createAction('UPDATE_KNOWLEDGE');
export const updateKnowledgeError = createAction('UPDATE_KNOWLEDGE_ERROR');
export const editKnowledge = createAction('EDIT_KNOWLEDGE');
export const saveKnowledge = createAction('SAVE_KNOWLEDGE');
export const updateCloudKnowledges = createAction('UPDATE_CLOUD');
export const changeKnowledgeName = createAction("CHANGE_KNOWLEDGE_NAME");


