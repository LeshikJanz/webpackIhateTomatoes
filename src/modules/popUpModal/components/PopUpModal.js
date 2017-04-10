"use strict";
var _this = this;
var React = require('react');
var Modal = require('react-modal');
var LastDraft_1 = require('../../DraftEditor/LastDraft');
var style_1 = require('../styles/style');
exports.PopUpModal = function (props) {
    return (React.createElement("div", null, React.createElement("button", {onClick: props.changeModalStatus}, "Open Modal"), React.createElement(Modal, {isOpen: props.isModalOpen, onAfterOpen: _this.afterOpenModal, onRequestClose: props.changeModalStatus, style: style_1.customStyles, contentLabel: "Example Modal"}, React.createElement(LastDraft_1.default, null))));
};
//# sourceMappingURL=PopUpModal.js.map