"use strict";
var createReducer_1 = require('utils/createReducer');
var actions_1 = require("../../actions");
var initialState = {
    isModalOpen: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createReducer_1.createReducer.apply(void 0, [(_a = {},
    _a[actions_1.changeModalStatus] = function (state) { return ({}); },
    _a
)].concat(state, ["isModalOpen", !state.isModalOpen]));
initialState;
;
var _a;
//# sourceMappingURL=modalReducer.js.map