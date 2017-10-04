import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import "assets/js/tagcanvas.min.js";
import { fetchCloudInit, openKnowledge, handleModalAction, clearKnowledge } from "modules/actions";
import { IKnowledge } from "interfaces";
import { MODAL_TYPES } from "constants/index";
import { FlyingTags } from "../components/FlyingTags";
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import { TAG_CLOUD_INIT, TAG_CLOUD_END } from "../constants/index";

const getTitle = (elem) => `User:&nbsp;${(elem.account && elem.account.username) || 'No&nbsp;Name'},&nbsp;${(elem.relations && elem.relations.leading) || 0}&nbsp;renewers`;

const getHtmlTag = (elem, number = '', isTooltipShown) =>
  `<li id="tag${number}" 
          onclick="{ this.dispatchEvent(new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${elem.id}' }})); return false; }">
          <a ${isTooltipShown && 'title=' + getTitle(elem)}>${elem.name}</a>
  </li>`;

const generateTags = (tags: Array, isTooltipShown) => {
  let tagCloud = `${TAG_CLOUD_INIT}`;
  tags.forEach((elem, index) => tagCloud += getHtmlTag(elem, 0, isTooltipShown));

  return tagCloud + TAG_CLOUD_END;
};

const setNewTag = (tag, number) => {
  if ( tag ) {
    $('#tags ul').append(getHtmlTag(tag, number));
    removeTagCloud();
  }
};

const removeTagCloud = () => {
  TagCanvas.Delete('Canvas', `tags`);
  $('#cloud').replaceWith('<textarea value={this.props.contents}/>');
};

const startCloud = () => TagCanvas.Resume('Canvas', `tags`);
const stopCloud = () => TagCanvas.Pause('Canvas', `tags`);

const tagCloudCreator = (parent, tags, isTooltipShown) => {
  let $parent = $(parent);
  let $editor = $(generateTags(tags, isTooltipShown));
  $parent.find('textarea').replaceWith($editor);
};

const mapStateToProps = (state: any) => ({
  highlight: state.Highlight,
  isModalOpen: state.Modal.isOpen
});

const mapDispatchToProps: any = (dispatch: any) => ({
  openEditor: () => dispatch(handleModalAction({ type: MODAL_TYPES.editor })),
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  openKnowledge: (knowledge: IKnowledge) => {
    dispatch(clearKnowledge());
    dispatch(openKnowledge(knowledge));
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('tagNumber', 'handleTagNumber', 0),
  withHandlers({
    handleTagClick: (props) => (e: Event) => {
      props.openKnowledge(props.tags.find((elem: any) => elem.id === e.detail.tagId));
      props.openEditor();
      stopCloud();
    },
    tagCloudController: (props) => () => {
      try {
        TagCanvas.Start('Canvas', 'tags', props.tagCanvasSettings);
      } catch (e) {
        const canvasContainer = document.getElementById('CanvasContainer');
        if ( canvasContainer ) {
          canvasContainer.style.display = 'none';
        }
      }
    }
  }),
  lifecycle({
    componentDidUpdate() {
      if ( this.props.tagNumber != (this.props.tags && this.props.tags.length) ) {
        if ( this.props.tagNumber ) setNewTag(this.props.tags[this.props.tags.length - 1], this.props.tags.length - 1);
        this.props.handleTagNumber(this.props.tags.length);
      }
      removeTagCloud();
      tagCloudCreator(ReactDOM.findDOMNode(this), this.props.tags, this.props.isTooltipShown);

      this.props.tagCloudController();
    },
    componentDidMount() {
      document.addEventListener('tagclick', this.props.handleTagClick);
      this.componentDidUpdate();
    },
    componentWillUnmount() {
      removeTagCloud();
      document.removeEventListener('tagclick', this.props.handleTagClick);
    },
    shouldComponentUpdate(nextProps, nextState) {
      return !nextProps.isModalOpen;
    }
  })
)(FlyingTags);
