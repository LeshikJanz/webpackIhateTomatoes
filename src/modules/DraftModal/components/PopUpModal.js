"use strict";
const React = require('react');
const Modal = require('react-modal');
const containers_1 = require('../../DraftEditor/containers');
const style_1 = require('../styles/style');
exports.PopUpModal = (props) => {
    const closeModal = () => {
        props.changeModalStatus();
        props.updateKnowledge();
    };
    const afterOpenModal = () => { };
    return (React.createElement("div", null, React.createElement(Modal, {isOpen: props.isModalOpen, onAfterOpen: afterOpenModal, onRequestClose: closeModal, style: style_1.customStyles, contentLabel: "Example Modal"}, React.createElement(containers_1.default, null))));
};
//# sourceMappingURL=PopUpModal.js.map