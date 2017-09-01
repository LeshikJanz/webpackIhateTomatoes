import { put, takeEvery, select } from 'redux-saga/effects'
import { Task } from "redux-saga";
import {
  updateCloudKnowledges, updateKnowledgeError, saveKnowledge, updateCloudInit, updateCloudError, updateCloudDone
} from "modules/actions";
import { updateCloudById } from "api/cloud";

const getKnowledgeFromState = (state: any) => state.Knowledge;

const getCloudFromState = (state: any) => state.Cloud;

export function* saveKnowledgeSaga(): Iterator<Object | Task> {
  try {
    const knowledge = yield select(getKnowledgeFromState);

    yield put(updateCloudKnowledges(knowledge));
  } catch (e) {
    yield put(updateKnowledgeError(e));
  }
}

export function* updateCloudSaga(): Iterator<Object | Task> {
  try {
    const cloud = yield select(getCloudFromState);
    const updatedCloud = yield updateCloudById(cloud.id, cloud);
    yield put(updateCloudDone(updatedCloud));
  } catch (e) {
    yield put(updateCloudError(e));
  }
}

export function* knowledgeSaga() {
  yield takeEvery(saveKnowledge().type, saveKnowledgeSaga);
  yield takeEvery(updateCloudInit().type, updateCloudSaga);
}
