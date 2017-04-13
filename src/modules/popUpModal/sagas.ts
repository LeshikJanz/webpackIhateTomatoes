import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchCloud, fetchKnowledge } from "../../api/cloud";
import { fetchCloudInit, fetchCloudDone, fetchCloudError, fetchKnowledgeInit } from "../actions";
const currentCloudId = "58ee2eb68859711d95b30194";

export function* fetchCloudSaga() {
  try {
    const cloudListKnowledges = yield fetchCloud(currentCloudId);
    yield put(fetchCloudDone(cloudListKnowledges));
  }catch(e){
    yield put(fetchCloudError(e.message));
  }
}

export function* fetchKnowledgeSaga(id: any) {
  try{
    console.log("id");
    console.log(id);
     const knowledges = yield fetchKnowledge(id);

  }catch(e){

  }
}


export function* popUpSaga() {
  yield takeEvery(fetchCloudInit().type, fetchCloudSaga);
  yield takeEvery(fetchKnowledgeInit().type, fetchKnowledgeSaga);
}

