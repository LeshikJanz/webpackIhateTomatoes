"use strict";
const effects_1 = require('redux-saga/effects');
const actions_1 = require("../actions");
const cloud_1 = require("../../api/cloud");
const getFromState = (state) => state.Knowledge;
function* createNewKnowledgeSaga({ payload }) {
    try {
        const knowledge = yield cloud_1.addNewKnowledge(payload);
        console.log("knowledge");
        console.log(knowledge);
        yield effects_1.put(actions_1.addTag(knowledge));
    }
    catch (e) {
        yield effects_1.put(actions_1.updateKnowledgeError(e));
    }
}
exports.createNewKnowledgeSaga = createNewKnowledgeSaga;
function* headerSaga() {
    yield effects_1.takeEvery(actions_1.createNewKnowledge().type, createNewKnowledgeSaga);
}
exports.headerSaga = headerSaga;
//# sourceMappingURL=sagas.js.map