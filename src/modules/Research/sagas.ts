import { takeEvery, put, select } from "redux-saga/effects";
import {
  getKnowledgesInit,
  getKnowledgesDone, getKnowledgesError
} from "./actions";
import { Task } from "redux-saga";
import { NotificationManager } from 'react-notifications';
import { fetchKnowledges } from "../../api/cloud";

const getResearchForm = (state: any) => state.form.ResearchForm.values;

/**
 * Creating relation
 *
 * @returns {Iterator<Object | Task>}
 */
export function* getKnowledgesSaga(): Iterator<Object | Task> {
  try {
    const researchForm = yield select(getResearchForm);
    const knowledges = yield fetchKnowledges(researchForm);
    yield put(getKnowledgesDone(knowledges));
  } catch (error) {
    yield put(getKnowledgesError(error));
  }
}

/**
 * Draft modal saga
 */
export function* researchSaga() {
  yield takeEvery(getKnowledgesInit().type, getKnowledgesSaga);
}

