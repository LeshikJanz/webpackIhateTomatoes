"use strict";
const react_redux_1 = require('react-redux');
const index_1 = require("../components/index");
const actions_1 = require("../../actions");
const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({
    addTag: (tag) => dispatch(actions_1.createNewKnowledge(tag)),
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps, null)(index_1.Header);
//# sourceMappingURL=index.js.map