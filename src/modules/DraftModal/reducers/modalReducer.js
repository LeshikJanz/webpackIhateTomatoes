"use strict";
const createReducer_1 = require('utils/createReducer');
const actions_1 = require("../../actions");
const initialState = {
    isModalOpen: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createReducer_1.createReducer({
    [actions_1.changeModalStatus]: (state) => ({}) }, ...state, "isModalOpen", !state.isModalOpen);
initialState;
;
//# sourceMappingURL=modalReducer.js.map