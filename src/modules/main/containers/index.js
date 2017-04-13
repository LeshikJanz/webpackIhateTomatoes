"use strict";
const App_1 = require('../components/App');
const react_redux_1 = require('react-redux');
const actions_1 = require("../../actions");
const mapStateToProps = (state) => ({
    trackNumber: state.trackNumber,
    isModalOpen: state.Modal.isModalOpen,
    clouds: state.Cloud
});
const mapDispatchToProps = (dispatch) => {
    return {
        addTag: (tag) => dispatch(actions_1.addTag(tag))
    };
};
const mergeProps = ({ trackNumber }, { dispatch }) => ({
    trackNumber: trackNumber,
    onClick: () => {
        dispatch({
            type: "ADD_TRACK",
            payload: trackNumber + 1
        });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(App_1.App);
//# sourceMappingURL=index.js.map