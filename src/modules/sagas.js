"use strict";
const sagas_1 = require('./DraftModal/sagas');
const sagas_2 = require("./jqueryCloud/sagas");
const sagas_3 = require("./header/sagas");
function* rootSaga() {
    yield [
        sagas_1.popUpSaga(),
        sagas_2.cloudSaga(),
        sagas_3.headerSaga()
    ];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootSaga;
//# sourceMappingURL=sagas.js.map