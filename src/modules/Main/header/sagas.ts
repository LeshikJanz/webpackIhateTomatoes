import { put, takeEvery, select } from 'redux-saga/effects'
import { addNewKnowledge, addNewCloud } from "api/cloud";
import { Task } from "redux-saga";
import {
  createNewKnowledgeInit, createNewKnowledgeDone,
  fetchCloudInit, createNewKnowledgeError
} from "modules/actions";
import { push } from "react-router-redux";
import { urls } from "urls";

const getknowledgeCreateFormFromState = (state: any) => state.form.knowledgeCreateForm.values;

const getKnowledgeFromState = (state: any) => state.Knowledge;

/**
 * Handle creating new knowledge
 *
 * fromExisting: true - means that this knowledge has been renewed, fromExisting: false - just create new knowledge
 *
 * @param { any } payload - { fromExisting: boolean }
 *
 * @returns {Iterator<Object | Task>}
 */
export function* createNewKnowledgeSaga({ payload }): Iterator<Object | Task> {
  try {
    const knowledgeCreateForm = yield select(getknowledgeCreateFormFromState);

    const knowledgeForCopy = yield select(getKnowledgeFromState);

    const newKnowledge = {
      accountId: localStorage.getItem('UserId'),
      name: knowledgeCreateForm.name,
      cloudId: knowledgeCreateForm.cloud.id,
      treeId: new Date().getTime()
    };

    if ( payload && payload.fromExisting ) {
      newKnowledge.text = knowledgeForCopy.text;
      newKnowledge.founderId = knowledgeForCopy.accountId;
      newKnowledge.founderKnowledgeId = knowledgeForCopy.id;
      newKnowledge.treeId = knowledgeForCopy.treeId;
    }

    // check if cloud is not exist
    if ( !knowledgeCreateForm.cloud.id ) {
      const newCloud = yield addNewCloud({
        name: knowledgeCreateForm.cloud.value,
        accountId: localStorage.getItem('UserId')
      });
      newKnowledge.cloudId = newCloud.id;
    }

    const knowledge = yield addNewKnowledge(newKnowledge);
    yield put(createNewKnowledgeDone(knowledge));

    yield put(fetchCloudInit(knowledge.cloudId));
    yield put(push(urls.cloud + '/' + knowledge.cloudId));
  } catch (error) {
    console.error(error);
    yield put(createNewKnowledgeError(error));
  }
}

/**
 * Saga with header actions
 */
export function* headerSaga() {
  yield takeEvery(createNewKnowledgeInit().type, createNewKnowledgeSaga);
}

