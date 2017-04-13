"use strict";
const react_redux_1 = require('react-redux');
const index_1 = require("../components/index");
const actions_1 = require("../../actions");
const mapStateToProps = (state) => ({
    clouds: state.Cloud,
    isModalOpen: state.Modal.isModalOpen
});
const mapDispatchToProps = (dispatch) => ({
    addTag: (tag) => dispatch(actions_1.addTag(tag)),
    changeModalStatus: () => dispatch(actions_1.changeModalStatus()),
    fetchCloudInit: () => dispatch(actions_1.fetchCloudInit()),
    openKnowledge: (id) => dispatch(actions_1.openKnowledge(id))
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(index_1.TagCloud);
//# sourceMappingURL=index.js.map