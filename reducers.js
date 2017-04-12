"use strict";
var redux_1 = require("redux");
var cloudReducer_1 = require("modules/jqueryCloud/reducers/cloudReducer");
var modalReducer_1 = require("modules/popUpModal/reducers/modalReducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    Cloud: cloudReducer_1.default,
    Modal: modalReducer_1.default
});
//# sourceMappingURL=reducers.js.map