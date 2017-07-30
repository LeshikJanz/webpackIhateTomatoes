"use strict";
var react_redux_1 = require('react-redux');
var index_1 = require("../components/index");
var actions_1 = require("modules/actions");
/**
 * Function takes a single argument of the entire Redux store’s state
 * and returns an object to be passed as props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} state - App state
 */
var mapStateToProps = function (state) { return ({}); };
/**
 * Function is a Redux action creator wrapped into a dispatch call
 * so they may be invoked directly, will be merged into the component’s props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} dispatch - dispatch
 */
var mapDispatchToProps = function (dispatch) { return ({
    handleModal: function () { return dispatch(actions_1.handleModalAction()); }
}); };
exports.__esModule = true;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(index_1.CustomModal);
//# sourceMappingURL=index.js.map