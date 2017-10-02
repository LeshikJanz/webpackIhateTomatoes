import { createAction } from "utils/createAction";

export const getKnowledgesInit = createAction('GET_KNOWLEDGES_INIT');
export const getKnowledgesDone = createAction('GET_KNOWLEDGES_DONE');
export const getKnowledgesError = createAction('GET_KNOWLEDGES_ERROR');