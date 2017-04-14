"use strict";
const effects_1 = require('redux-saga/effects');
const cloud_1 = require("../../api/cloud");
const actions_1 = require("../actions");
const index_1 = require("../jqueryCloud/constants/index");
const getFromState = (state) => state.Knowledge;
function* fetchCloudSaga() {
    try {
        const cloudListKnowledges = yield cloud_1.fetchCloud(index_1.currentCloudId);
        yield effects_1.put(actions_1.fetchCloudDone(cloudListKnowledges));
    }
    catch (e) {
        yield effects_1.put(actions_1.fetchCloudError(e));
    }
}
exports.fetchCloudSaga = fetchCloudSaga;
function* updateKnowledgeSaga() {
    try {
        const knowledge = yield effects_1.select(getFromState);
        yield cloud_1.updateKnowledgeById(knowledge.id, knowledge);
        yield effects_1.put(actions_1.saveKnowledge());
    }
    catch (e) {
        yield effects_1.put(actions_1.updateKnowledgeError(e));
    }
}
exports.updateKnowledgeSaga = updateKnowledgeSaga;
function* popUpSaga() {
    yield effects_1.takeEvery(actions_1.fetchCloudInit().type, fetchCloudSaga);
    yield effects_1.takeEvery(actions_1.updateKnowledge().type, updateKnowledgeSaga);
}
exports.popUpSaga = popUpSaga;
//# sourceMappingURL=sagas.js.map