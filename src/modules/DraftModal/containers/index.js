"use strict";
const react_redux_1 = require('react-redux');
const PopUpModal_1 = require("../components/PopUpModal");
const actions_1 = require("../../actions");
const mapStateToProps = (state) => ({
    isModalOpen: state.Modal.isModalOpen
});
const mapDispatchToProps = dispatch => ({
    changeModalStatus: () => dispatch(actions_1.changeModalStatus()),
    updateKnowledge: () => dispatch(actions_1.updateKnowledge()),
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(PopUpModal_1.PopUpModal);
//# sourceMappingURL=index.js.map