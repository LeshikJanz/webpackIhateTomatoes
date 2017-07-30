"use strict";
var React = require('react');
var Modal = require('react-modal');
var style_1 = require("../style");
require('styles/modal.scss');
exports.CustomModal = function (props) {
    var title = props.title, handleModal = props.handleModal;
    /**
     * Close Confirm Modal
     *
     * @returns {void}
     * */
    var closeModal = function () { return handleModal(); };
    /**
     * Renders the component.
     *
     * @memberof LastDraft
     * @return {string} - HTML markup for the component
     */
    return (<Modal isOpen={props.isModalOpen} onRequestClose={closeModal} style={style_1["default"]} contentLabel="Example Modal">
      <div>
        <div className="modal-header">
          <h1 className="modal-title">
            {title}
          </h1>
          <button type="button" className="close" onClick={handleModal} aria-label="Close">
            <img src="assets/icons/close.svg"/>
          </button>
        </div>
        {props.children}
      </div>
    </Modal>);
};
//# sourceMappingURL=index.js.map