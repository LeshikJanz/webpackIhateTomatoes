import { createAction } from "../utils/createAction";

export const addTag = createAction('ADD_TAG');
export const createNewKnowledge = createAction('CREATE_NEW_KNOWLEDGE');
export const changeModalStatus = createAction('CHANGE_MODAL_STATUS');
export const getCloudList = createAction('GET_LISTS');
export const viewCloud = createAction('VIEW_CLOUD');
export const fetchCloudsInit = createAction('FETCH_CLOUDS_INIT');
export const fetchCloudsDone = createAction('FETCH_CLOUDS_DONE');
export const fetchCloudsError = createAction('FETCH_CLOUDS_ERROR');
export const fetchCloudInit = createAction('FETCH_CLOUD_INIT');
export const fetchCloudDone = createAction('FETCH_CLOUD_DONE');
export const fetchCloudError = createAction('FETCH_CLOUD_ERROR');
export const updateCloud = createAction('UPDATE_CLOUD');
export const openKnowledge = createAction('OPEN_KNOWLEDGE');
export const updateKnowledge = createAction('UPDATE_KNOWLEDGE');
export const updateKnowledgeError = createAction('UPDATE_KNOWLEDGE_ERROR');
export const editKnowledge = createAction('EDIT_KNOWLEDGE');
export const saveKnowledge = createAction('SAVE_KNOWLEDGE');
export const updateCloudKnowledges = createAction('UPDATE_CLOUD');

export const setAuthMethod = createAction('SET_AUTH_METHOD');

// export const getListsStart = createAction('GET_LISTS_START');
// export const getListsAction = createAction('GET_LISTS');
// export const moveCardAction = createAction('MOVE_CARD');
// export const moveListAction = createAction('MOVE_LIST');
// export const toggleDraggingAction = createAction('TOGGLE_DRAGGING');

export const changeKnowledgeName = createAction("CHANGE_KNOWLEDGE_NAME");

