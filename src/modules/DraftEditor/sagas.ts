import { takeEvery, put, select } from "redux-saga/effects";
import { createRenewerInit, createRenewerDone, createRenewerError } from "./actions";
import { IRenewer, IKnowledge } from "interfaces/index";
import { Task } from "redux-saga";
import { NotificationManager } from 'react-notifications';
import { addRenewer } from "api/relation";

const getFromState = (state: any) => state.Knowledge;

/**
 * Creating relation
 *
 * @returns {Iterator<Object | Task>}
 */
export function* createRenewerSaga(): Iterator<Object | Task> {
  try {
    const curKnowledge: IKnowledge = yield select(getFromState);
    const renewer = {
      accountId: localStorage.getItem('UserId'),
      founderId: curKnowledge.accountId,
      cloudId: curKnowledge.cloudId,
      knowledgeId: curKnowledge.id
    };

    const createdRenewer: IRenewer = yield addRenewer(renewer.accountId, renewer);

    NotificationManager.success(`You have been successfully renewed ${curKnowledge.name}`, 'Error!');
    yield put(createRenewerDone(createdRenewer));
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createRenewerError(error));
  }
}

/**
 * Draft modal saga
 */
export function* editorSaga() {
  yield takeEvery(createRenewerInit().type, createRenewerSaga);
}

