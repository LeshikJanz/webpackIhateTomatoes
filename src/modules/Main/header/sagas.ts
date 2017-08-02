import { put, takeEvery, select } from 'redux-saga/effects'
import { addNewKnowledge, addNewCloud } from "api/cloud";
import { Task } from "redux-saga";
import { addTag, updateKnowledgeError, createNewKnowledge } from "../../actions";
import { IKnowledge, ICloudGroup } from "interfaces/index";
import { NotificationManager } from 'react-notifications';
import { fetchCloudsInit } from "../actions";
import { knowledgeSaga } from "../../Cloud/components/JqueryCloud/sagas";
import { push } from "react-router-redux";
import { urls } from "../../urls";
import { fetchCloudGroupList } from "../../Board/sagas";

const getFromState = (state: any) => state.form.knowledgeForm.values;

/**
 * Handle creating new knowledge
 *
 * @returns {Iterator<Object | Task>}
 */
export function* createNewKnowledgeSaga(): Iterator<Object | Task> {
  try {
    const knowledgeForm = yield select(getFromState);

    let mainGroup = {};
    // check if cloud is not exist
    if(knowledgeForm.cloud && !knowledgeForm.cloud.id) {
      const cloudGroups = yield fetchCloudGroupList();
      mainGroup = cloudGroups.find((cg: ICloudGroup) => cg.name === 'Main');
      const newCloud = {
        name: knowledgeForm.cloud.name,
        accountId: localStorage.getItem('UserId')
      };

      yield addNewCloud(mainGroup.id, newCloud)
    }

    const newKnowledge = {
      accountId: localStorage.getItem('UserId'),
      name: knowledgeForm.name,
      cloudId: knowledgeForm.cloud.id
    };

    const knowledge = yield addNewKnowledge(newKnowledge);

    yield put(addTag(knowledge));
    yield put(push(urls.cloud + '/' + knowledge.cloudId));
    NotificationManager.success(`The knowledge ${knowledge.name} has been successfully created`, 'Success!');
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(updateKnowledgeError(error));
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
  yield takeEvery(createNewKnowledge().type, createNewKnowledgeSaga);
  yield takeEvery(fetchCloudsInit().type, fetchCloudsSaga);
}

