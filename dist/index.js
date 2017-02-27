"use strict";
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
exports.Hello = function (props) { return React.createElement("h1", null, "Hello from ", props.compiler, " and ", props.framework, "!"); };
//# sourceMappingURL=index.js.map