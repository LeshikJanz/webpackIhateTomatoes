"use strict";
var react_redux_1 = require('react-redux');
var index_1 = require("../components/index");
var mapStateToProps = function (state) { return ({
    clouds: state.Cloud,
    isModalOpen: state.Modal.isModalOpen
}); };
var mapDispatchToProps = function (dispatch) { return ({
    openModal: function () { return alert("It's modal"); }
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(index_1.TagCloud);
//# sourceMappingURL=index.js.map