"use strict";
const createReducer_1 = require('utils/createReducer');
const actions_1 = require("../../actions");
const initialState = {
    Name: "",
    Text: {},
    CreateDate: "",
    UpdateDate: "",
    cloudId: ""
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createReducer_1.createReducer({
    [actions_1.openKnowledge]: (state, payload) => ({}) }, ...state, ...payload);
[actions_1.editKnowledge];
((state, payload) => ({
    state: state,
    Text: JSON.parse(payload)
}));
initialState;
;
//# sourceMappingURL=knowledgeReducer.js.map