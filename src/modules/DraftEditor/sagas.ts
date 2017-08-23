import { takeEvery, put, select } from "redux-saga/effects";
import { createRenewerInit, createRenewerDone, createRenewerError } from "./actions";
import { IRelation, IKnowledge } from "interfaces/index";
import { Task } from "redux-saga";
import { NotificationManager } from 'react-notifications';
import { addRenewer } from "api/relation";

const getFromState = (state: any) => state.Knowledge;

/**
 * Generating Renew relation
 */
function *generateRenewer(knowledge: IKnowledge): Iterator<IRelation | Task> {
  return {
    accountId: localStorage.getItem('UserId'),
    founderId: knowledge.accountId,
    cloudId: knowledge.cloudId,
    knowledgeId: knowledge.id
  }
}

/**
 * Creating relation
 *
 * @returns {Iterator<Object | Task>}
 */
export function* createRenewerSaga(): Iterator<Object | Task> {
  try {
    const curKnowledge: IKnowledge = yield select(getFromState);
    const renewer = yield generateRenewer(curKnowledge);

    const createdRenewer: IRelation = yield addRenewer(renewer.accountId, renewer);

    NotificationManager.success(`You have been successfully renewed ${curKnowledge.name}`, 'Error!');
    yield put(createRenewerDone(createdRenewer));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    console.error(error);
    yield put(createRenewerError(error));
  }
}

/**
 * Draft modal saga
 */
export function* editorSaga() {
  yield takeEvery(createRenewerInit().type, createRenewerSaga);
}

