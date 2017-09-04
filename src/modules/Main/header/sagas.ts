import { put, takeEvery, select } from 'redux-saga/effects'
import { addNewKnowledge, addNewCloud } from "api/cloud";
import { Task } from "redux-saga";
import {
  addTag, updateKnowledgeError, createNewKnowledgeInit, createNewKnowledgeDone,
  fetchCloudInit, createNewKnowledgeError
} from "../../actions";
import { IKnowledge } from "interfaces";
import { NotificationManager } from 'react-notifications';
import { fetchCloudsInit } from "../actions";
import { push } from "react-router-redux";
import { urls } from "urls";

const getFromState = (state: any) => state.form.knowledgeCreateForm.values;

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
    const knowledgeCreateForm = yield select(getFromState);

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
    NotificationManager.success(`The knowledge ${knowledge.name} has been successfully created`, 'Success!');
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    console.error(error);
    yield put(createNewKnowledgeError(error));
  }
}

/**
 * Handle fetching clouds
 *
 * @param {IKnowledge} payload - knowledge
 * @returns {Iterator<Object | Task>}
 */
export function* fetchCloudsSaga({ payload }: IKnowledge): Iterator<Object | Task> {
  try {
    payload.accountId = localStorage.getItem('UserId');
    const knowledge = yield addNewKnowledge(payload);

    yield put(addTag(knowledge));
    NotificationManager.success(`The knowledge ${knowledge.name} has been successfully created`, 'Success!');
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(updateKnowledgeError(error));
  }
}

/**
 * Saga with header actions
 */
export function* headerSaga() {
  yield takeEvery(createNewKnowledgeInit().type, createNewKnowledgeSaga);
  yield takeEvery(fetchCloudsInit().type, fetchCloudsSaga);
}

