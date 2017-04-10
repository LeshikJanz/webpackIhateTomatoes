"use strict";
var App_1 = require('../components/App');
var react_redux_1 = require('react-redux');
var actions_1 = require("../../actions");
var mapStateToProps = function (state) { return ({
    trackNumber: state.trackNumber,
    isModalOpen: state.Modal.isModalOpen
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        addTag: function (tag) { return dispatch(actions_1.addTag(tag)); }
    };
};
var mergeProps = function (_a, _b) {
    var trackNumber = _a.trackNumber;
    var dispatch = _b.dispatch;
    return ({
        trackNumber: trackNumber,
        onClick: function () {
            dispatch({
                type: "ADD_TRACK",
                payload: trackNumber + 1
            });
        },
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(App_1.App);
//# sourceMappingURL=index.js.map