import { createAction } from "../utils/createAction";

export const addTag = createAction('ADD_TAG');
export const changeModalStatus = createAction('CHANGE_MODAL_STATUS');
export const fetchCloud = createAction('FETCH_CLOUD_KNOWLEDGES');
export const openKnowledge = createAction('OPEN_KNOWLEDGE');
export const saveKnowledge = createAction('SAVE_KNOWLEDGE');
