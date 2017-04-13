"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactIgnore = (function (_super) {
    __extends(ReactIgnore, _super);
    function ReactIgnore() {
        var _this = this;
        _super.apply(this, arguments);
        this.shouldComponentUpdate = function () {∂
            return false;
        };
        this.render = function () { return React.Children.only(_this.props.children); };
    }
    return ReactIgnore;
}(React.Component));
exports.ReactIgnore = ReactIgnore;
//# sourceMappingURL=ReactIgnore.js.map
