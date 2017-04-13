"use strict";
const React = require('react');
require("bootstrap/dist/css/bootstrap.css");
require("../styles/font-awesome.min.css");
require("../styles/main.css");
const index_1 = require('../../header/containers/index');
const index_2 = require('../../jqueryCloud/containers/index');
const index_3 = require('../../DraftModal/containers/index');
exports.App = (props) => {
    const { isModalOpen } = props;
    function addNewTag() {
        const tag = {
            source: "12345",
            value: "Tag №"
        };
        props.addTag(tag);
    }
    return (React.createElement("div", null, !isModalOpen && React.createElement(index_1.default, null), React.createElement(index_2.default, {contents: props.trackNumber}), React.createElement(index_3.default, null)));
};
//# sourceMappingURL=App.js.map