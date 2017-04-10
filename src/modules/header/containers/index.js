"use strict";
var react_redux_1 = require('react-redux');
var index_1 = require("../components/index");
var actions_1 = require("../../actions");
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) { return ({
    addTag: function (tag) { return dispatch(actions_1.addTag(tag)); },
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(index_1.Header);
//# sourceMappingURL=index.js.map