"use strict";
const redux_1 = require("redux");
const cloudReducer_1 = require("modules/jqueryCloud/reducers/cloudReducer");
const modalReducer_1 = require("src/modules/DraftModal/reducers/modalReducer");
const knowledgeReducer_1 = require("src/modules/DraftModal/reducers/knowledgeReducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    Cloud: cloudReducer_1.default,
    Modal: modalReducer_1.default,
    Knowledge: knowledgeReducer_1.default
});
//# sourceMappingURL=reducers.js.map