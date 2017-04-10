"use strict";
var createReducer_1 = require('utils/createReducer');
var actions_1 = require("../../actions");
var initialState = [
    {
        source: "http://www.google.com",
        value: "Meat"
    },
    {
        source: "http://www.google.com",
        value: "Fish"
    },
    {
        source: "http://www.google.com",
        value: "Google"
    },
    {
        source: "http://www.google.com",
        value: "Javascript"
    },
    {
        source: "http://www.google.com",
        value: "Typescript"
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createReducer_1.createReducer((_a = {},
    _a[actions_1.addTag] = function (state, payload) { return (state.concat([
        payload
    ])); },
    _a
), initialState);
var _a;
//# sourceMappingURL=cloudReducer.js.map