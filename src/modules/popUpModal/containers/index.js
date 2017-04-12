"use strict";
var react_redux_1 = require('react-redux');
var PopUpModal_1 = require("../components/PopUpModal");
var actions_1 = require("../../actions");
var mapStateToProps = function (state) { return ({
    isModalOpen: state.Modal.isModalOpen
}); };
var mapDispatchToProps = function (dispatch) { return ({
    changeModalStatus: function () { return dispatch(actions_1.changeModalStatus()); }
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(PopUpModal_1.PopUpModal);
//# sourceMappingURL=index.js.map