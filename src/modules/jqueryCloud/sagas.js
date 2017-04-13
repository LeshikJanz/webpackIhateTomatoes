"use strict";
const effects_1 = require('redux-saga/effects');
const actions_1 = require("../actions");
const getFromState = (state) => state.Knowledge;
function* saveKnowledgeSaga() {
    try {
        const knowledge = yield effects_1.select(getFromState);
        yield effects_1.put(actions_1.updateCloudKnowledges(knowledge));
    }
    catch (e) {
        yield effects_1.put(actions_1.updateKnowledgeError(e));
    }
}
exports.saveKnowledgeSaga = saveKnowledgeSaga;
function* cloudSaga() {
    yield effects_1.takeEvery(actions_1.saveKnowledge().type, saveKnowledgeSaga);
}
exports.cloudSaga = cloudSaga;
//# sourceMappingURL=sagas.js.map