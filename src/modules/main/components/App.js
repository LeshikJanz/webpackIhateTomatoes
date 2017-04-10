"use strict";
var React = require('react');
require("bootstrap/dist/css/bootstrap.css");
require("../styles/font-awesome.min.css");
require("../styles/main.css");
var index_1 = require('../../header/containers/index');
var index_2 = require('../../jqueryCloud/containers/index');
var index_3 = require('../../popUpModal/containers/index');
exports.App = function (props) {
    var isModalOpen = props.isModalOpen;
    function addNewTag() {
        var tag = {
            source: "12345",
            value: "Tag №"
        };
        props.addTag(tag);
    }
    return (React.createElement("div", null, !isModalOpen && React.createElement(index_1.default, null), React.createElement(index_2.default, {contents: props.trackNumber}), React.createElement(index_3.default, null)));
};
//# sourceMappingURL=App.js.map