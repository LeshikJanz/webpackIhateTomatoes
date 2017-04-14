"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require("jquery");
require("assets/js/tagcanvas.min.js");
require("../style.css");
const ReactIgnore_1 = require("./ReactIgnore");
const index_1 = require("../constants/index");
function tagCloudController() {
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
}
const generateTags = (tags) => {
    let tagCloud = `${index_1.tagCloudInitial}`;
    tags.forEach((elem, index) => tagCloud += `<li><a id="tag" 
        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${elem.id}' }}); this.dispatchEvent(myEvent); return false;}">${elem.Name}</a></li>`);
    return tagCloud + `</ul></div></div></div></div></div>`;
};
const setNewTag = (tag, number) => {
    $('#tags ul').append(`<li><a id="tag${number}"
                        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${tag.id}' }}); this.dispatchEvent(myEvent); return false;}">${tag.Name}</a></li>`);
    TagCanvas.Reload('Canvas', `tags`);
};
const startCloud = () => TagCanvas.Resume('Canvas', `tags`);
const stopCloud = () => TagCanvas.Pause('Canvas', `tags`);
const tagCloudCreator = (parent, tags) => {
    var $parent = $(parent);
    let $editor = $(generateTags(tags));
    $parent.find('textarea').replaceWith($editor);
    tagCloudController();
};
class TagCloud extends React.Component {
    constructor(...args) {
        super(...args);
        this.componentDidMount = () => {
            this.props.fetchCloudInit();
            document.addEventListener('tagclick', this.handleTagClick);
        };
        this.componentDidUpdate = () => {
            this.editor = tagCloudCreator(ReactDOM.findDOMNode(this), this.props.clouds);
            if (TagCloud.tagNumber != this.props.clouds.length) {
                if (TagCloud.tagNumber)
                    setNewTag(this.props.clouds[this.props.clouds.length - 1], this.props.clouds.length - 1);
                TagCloud.tagNumber = this.props.clouds.length;
            }
        };
        this.handleTagClick = (e) => {
            this.props.openKnowledge(this.props.clouds.find((elem) => elem.id === e.detail.tagId));
            this.props.changeModalStatus();
        };
    }
    render() {
        if (!this.props.isModalOpen)
            startCloud();
        else
            stopCloud();
        return (React.createElement("div", null, React.createElement(ReactIgnore_1.ReactIgnore, null, React.createElement("textarea", {value: this.props.contents}))));
    }
}
TagCloud.tagNumber = 0;
exports.TagCloud = TagCloud;
;
//# sourceMappingURL=index.js.map