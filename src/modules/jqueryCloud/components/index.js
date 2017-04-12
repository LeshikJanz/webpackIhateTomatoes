"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");
require("assets/js/tagcanvas.min.js");
require("../style.css");
var ReactIgnore_1 = require("./ReactIgnore");
var index_1 = require("../constants/index");
var react_router_1 = require('react-router');
var index_2 = require("../../anotherPage/index");
function tagCloudController() {
    window.onload = function () {
        try {
            TagCanvas.Start('Canvas', 'tags', {
                textFont: 'Trebuchet MS, Helvetica, sans-serif',
                textColour: '#337ab7',
                textHeight: 25,
                outlineMethod: 'block',
                outlineColour: '#acf',
                maxSpeed: 0.015,
                minBrightness: 0.2,
                depth: 0.92,
                pulsateTo: 0.6,
                initial: [0.2, -0.2],
                decel: 1,
                reverse: true,
                shadow: '#ccf',
                shadowBlur: 3,
                weight: false,
                imageScale: null,
                fadeIn: 1000,
                clickToFront: 600
            });
        }
        catch (e) {
            document.getElementById('CanvasContainer').style.display = 'none';
        }
    };
}
function openModal() {
    console.log("Open Modal");
}
function generateTags(tags, openModal) {
    var tagCloud = "" + index_1.tagCloudInitial;
    console.log("TagCanvas");
    console.log(TagCanvas);
    tags.forEach(function (elem, index) { return tagCloud += "<li><a id=\"go\" href=\"#/modal\" onClick={console.log(openModal)} class=\"tag\">" + elem.value + "</a></li>"; });
    return tagCloud + "</ul></div></div></div></div></div>";
}
function setNewTag(tag, number) {
    $('#tags ul').append("<li><a id=\"tag" + number + "\" onClick={alert(\"Hello\");} class=\"tag\" href=\"" + tag.source + "\" target=\"_blank\">" + tag.value + number + "</a></li>");
    TagCanvas.Reload('Canvas', "tags");
}
function startCloud() {
    TagCanvas.Resume('Canvas', "tags");
}
function stopCloud() {
    TagCanvas.Pause('Canvas', "tags");
}
function tagCloudCreator(parent, tags, openModal) {
    var $parent = $(parent);
    var $editor = $(generateTags(tags, openModal));
    $parent.find('textarea').replaceWith($editor);
    tagCloudController();
}
var TagCloud = (function (_super) {
    __extends(TagCloud, _super);
    function TagCloud() {
        var _this = this;
        _super.apply(this, arguments);
        this.componentDidMount = function () { return _this.editor = tagCloudCreator(ReactDOM.findDOMNode(_this), _this.props.clouds, _this.props.openModal); };
        this.componentDidUpdate = function () { return setNewTag(_this.props.clouds[_this.props.clouds.length - 1], _this.props.clouds.length - 1); };
    }
    TagCloud.prototype.navigate = function () {
        console.log(this.props);
    };
    TagCloud.prototype.render = function () {
        if (!this.props.isModalOpen)
            startCloud();
        else
            stopCloud();
        return (React.createElement("div", null, React.createElement(ReactIgnore_1.ReactIgnore, null, React.createElement("textarea", {value: this.props})), React.createElement(react_router_1.Link, {to: "component", Component: index_2.Component}), React.createElement("button", {onClick: this.navigate.bind(this)}, "Navigate")));
    };
    return TagCloud;
}(React.Component));
exports.TagCloud = TagCloud;
;
//# sourceMappingURL=index.js.map