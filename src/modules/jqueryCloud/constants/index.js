"use strict";
var HEADER_HEIGHT = 130;
var cloudWidth = window.innerWidth / 2;
var cloudHeight = window.innerHeight - HEADER_HEIGHT;
exports.tagCloudInitial = "\n  <div id=\"cloud\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-lg-offset-2 centered center-tag-cloud\">\n          <div id=\"CanvasContainer\">\n            <canvas width=\"" + cloudWidth + "px\" height=\"" + cloudHeight + "px\" id=\"Canvas\">\n              <p>Anything in here will be replaced on browsers that support the canvas element</p>\n            </canvas>\n          </div>\n          <div id=\"tags\">\n            <ul>";
//# sourceMappingURL=index.js.map