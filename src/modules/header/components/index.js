"use strict";
const React = require("react");
require("../styles/main.css");
const index_1 = require("../../jqueryCloud/constants/index");
const moment = require('moment');
exports.Header = (props) => {
    const getEmptyKnowledge = () => {
        return {
            Name: "New knowledge",
            UserId: "string",
            CreateDate: moment(),
            UpdateDate: moment(),
            Text: {},
            cloudId: index_1.currentCloudId
        };
    };
    return (React.createElement("div", {className: "navbar navbar-default navbar-fixed-top"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "navbar-header"}, React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse"}, React.createElement("span", {className: "icon-bar"}), React.createElement("span", {className: "icon-bar"}), React.createElement("span", {className: "icon-bar"})), React.createElement("a", {onClick: () => { props.addTag(getEmptyKnowledge()); }, className: "navbar-brand", href: "#"}, React.createElement("i", {className: "fa fa-bolt"}))), React.createElement("div", {id: "hello"}, React.createElement("div", {className: "col-lg-8 col-lg-offset-2 centered"}, React.createElement("h1", null, "Ваши знания в одном месте"))), React.createElement("div", {className: "navbar-collapse collapse"}, React.createElement("ul", {className: "nav navbar-nav navbar-right"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#contact"}, "Contact")))))));
};
//# sourceMappingURL=index.js.map