"use strict";
const react_redux_1 = require('react-redux');
const LastDraft_1 = require("../components/LastDraft");
const actions_1 = require("../../actions");
const mapStateToProps = (state) => ({
    isModalOpen: state.Modal.isModalOpen,
    knowledge: state.Knowledge
});
const mapDispatchToProps = dispatch => ({
    changeModalStatus: () => dispatch(actions_1.changeModalStatus()),
    editKnowledge: (text) => dispatch(actions_1.editKnowledge(text))
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(LastDraft_1.default);
//# sourceMappingURL=index.js.map