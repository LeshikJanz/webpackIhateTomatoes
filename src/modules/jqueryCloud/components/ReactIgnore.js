"use strict";
const React = require('react');
class ReactIgnore extends React.Component {
    constructor(...args) {
        super(...args);
        this.shouldComponentUpdate = () => {
            return false;
        };
        this.render = () => React.Children.only(this.props.children);
    }
}
exports.ReactIgnore = ReactIgnore;
//# sourceMappingURL=ReactIgnore.js.map