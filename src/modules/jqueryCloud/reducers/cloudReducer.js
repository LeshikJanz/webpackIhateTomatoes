"use strict";
const createReducer_1 = require('utils/createReducer');
const actions_1 = require("../../actions");
const initialState = [];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createReducer_1.createReducer({
    [actions_1.addTag]: (state, payload) => ([
        ...state,
        payload
    ]),
    [actions_1.fetchCloudDone]: (state, payload) => ([
        ...state,
        ...payload
    ]),
    [actions_1.fetchCloudError]: (state, error) => ([
        ...state,
        error.message
    ]),
    [actions_1.updateCloudKnowledges]: (state, payload) => ([
        ...state.filter((elem) => payload.id != elem.id),
        payload
    ]),
}, initialState);
//# sourceMappingURL=cloudReducer.js.map