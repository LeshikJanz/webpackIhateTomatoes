import * as React from "react";
import { EditorState, RichUtils, Modifier } from "draft-js";
const styles = require('../styles/toolbar.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import ToolbarItem from "./ToolbarItem";
import { getSelectionCoords } from "./utils";
import { BLOCK_TYPES } from "../constants/index";

const clearTypes = ['FONT_SIZE', 'FONT_FAMILY'];

export default class Toolbar extends React.Component {
  static defaultProps = {
    shouldDisplayToolbarFn() {
      return !this.editorState.getSelection().isCollapsed();
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      editingEntity: null,
      link: "",
      error: null
    };
  }

  removePreviousFontSizes = (type) => {
    const { editorState } = this.props;
    const selection = editorState.getSelection();

    return editorState.getCurrentInlineStyle()
      .reduce((contentState, st) => st.indexOf(type) == 0 ?
        Modifier.removeInlineStyle(contentState, selection, st) :
        contentState, editorState.getCurrentContent())
  };

  clearEditorState = (inlineStyle) => {
    const type = clearTypes.find(ct => inlineStyle.indexOf(ct) === 0);
    // Let's just allow one font size/family at a time. Turn off all active font sizes/families.
    return type && EditorState.push(
        this.props.editorState,
        this.removePreviousFontSizes(type),
        'change-inline-style'
      )
  };

  toggleInlineStyle = (inlineStyle) => {
    const clearEditorState = this.clearEditorState(inlineStyle);

    const nextEditorState = RichUtils.toggleInlineStyle(clearEditorState || this.props.editorState, inlineStyle);
    this.props.onChange(nextEditorState);
  }

  toggleBlockStyle = (blockType) => {
    this.props.onChange(
      RichUtils.toggleBlockType(this.props.editorState, blockType)
    );
  }

  toggleEntity = (entity) => {
    this.setState({ editingEntity: entity });
  }

  renderButton = (item, position) => {
    let current = null;
    let toggle = null;
    let active = null;
    let key = item.label;

    switch (item.type) {
      case "custom": {
        key = "custom-" + position;
        toggle = () => item.action(this.props.editorState);
        active = this.props.editorState.getCurrentInlineStyle();
        break;
      }
      case "inline": {
        current = this.props.editorState.getCurrentInlineStyle();
        toggle = () => this.toggleInlineStyle(item.style);
        active = current.has(item.style);
        break;
      }
      case "block": {
        const selection = this.props.editorState.getSelection();
        current = this.props.editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();
        toggle = () => this.toggleBlockStyle(item.style);
        active = item.style === current;
        break;
      }
      case "separator": {
        key = "sep-" + position;
        break;
      }
      case "entity": {
        const { entity = "LINK" } = item;
        key = "entity-" + entity;
        toggle = () => this.toggleEntity(entity);
        active = this.hasEntity(entity);
        break;
      }
    }

    return (
      <ToolbarItem key={key} active={active} toggle={toggle} item={item}
                   toggleInlineStyle={ this.toggleInlineStyle }
                   toggleBlockStyle={ this.toggleBlockStyle }
                   editorState={ this.props.editorState }
      />
    );
  }

  setError = (errorMsg) => {
    this.setState({ error: errorMsg });
  }

  cancelError = () => {
    this.setState({ error: null });
  }

  setBarPosition = () => {
    const editor = this.props.editor;
    const toolbar = this.toolbarEl;
    const arrow = this.arrowEl;
    const selectionCoords = getSelectionCoords(editor, toolbar);

    if (!selectionCoords) {
      return null;
    }

    if (selectionCoords &&
      !this.state.position ||
      this.state.position.bottom !== selectionCoords.offsetBottom ||
      this.state.position.left !== selectionCoords.offsetLeft ||
      !this.state.show) {
      this.setState({
        show: true,
        position: {
          bottom: selectionCoords.offsetBottom,
          left: selectionCoords.offsetLeft
        }
      }, state => {
        const minOffsetLeft = 5;
        const minOffsetRight = 5;
        const toolbarDimensions = toolbar.getBoundingClientRect();

        if (toolbarDimensions.left < minOffsetLeft) {
          toolbar.style.left = -((toolbarDimensions.width / 2) + toolbarDimensions.left - minOffsetLeft) + "px";
          arrow.style.left = ((toolbarDimensions.width / 2) + toolbarDimensions.left - minOffsetLeft) + "px";
        }
        if (toolbarDimensions.left + toolbarDimensions.width > window.innerWidth - minOffsetRight) {
          toolbar.style.left = -(toolbarDimensions.right - selectionCoords.offsetLeft + minOffsetRight) + "px";
          arrow.style.left = (toolbarDimensions.right - selectionCoords.offsetLeft + minOffsetRight) + "px";
        }
      });
    }
  }

  componentDidUpdate = () => {
    // reset toolbar position every time
    if (this.toolbarEl && this.arrowEl) {
      this.toolbarEl.style.left = "";
      this.arrowEl.style.left = "";
    }
    if (this.props.shouldDisplayToolbarFn()) {
      return this.setBarPosition();
    } else {
      if (this.state.show) {
        this.setState({
          show: false,
          editingEntity: null,
          link: "",
          error: null
        });
      }
    }
  }

  getCurrentEntityKey = () => {
    const selection = this.props.editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const contentState = this.props.editorState.getCurrentContent();
    const anchorBlock = contentState.getBlockForKey(anchorKey);
    const offset = selection.anchorOffset;
    const index = selection.isBackward ? offset - 1 : offset;
    return anchorBlock.getEntityAt(index);
  }

  getCurrentEntity = () => {
    const contentState = this.props.editorState.getCurrentContent();
    const entityKey = this.getCurrentEntityKey();
    if (entityKey) {
      return contentState.getEntity(entityKey);
    }
    return null;
  }

  hasEntity = (entityType) => {
    const entity = this.getCurrentEntity();
    return !!(entity && entity.getType() === entityType);
  }

  setEntity = (entityType, data, mutability = "MUTABLE") => {
    const { editorState } = this.props;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(entityType, mutability, data);
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newState = RichUtils.toggleLink(
      editorState,
      editorState.getSelection(),
      entityKey
    );
    const selectionState = EditorState.forceSelection(
      newState, editorState.getSelection()
    );

    this.props.onChange(selectionState);
  }

  removeEntity = () => {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      // toggleLink should be named toggleEntity: https://github.com/facebook/draft-js/issues/737
      this.props.onChange(RichUtils.toggleLink(editorState, selection, null));
    }
    this.cancelEntity();
  };

  cancelEntity = () => {
    this.props.editor && this.props.editor.focus();
    this.setState({
      editingEntity: null,
      error: null
    });
  };

  renderEntityInput = (entityType) => {
    if (!this.props.entityInputs) {
      console.warn("no entityInputs provided");
      return null;
    }
    const Component = this.props.entityInputs[entityType];
    const setEntity = (data, mutability) => this.setEntity(entityType, data, mutability);
    let entityData = {};
    let entity = null;
    if (this.hasEntity(entityType)) {
      entity = this.getCurrentEntity();
      if (entity) {
        entityData = entity.getData();
      }
    }
    if (Component) {
      return (
        <Component
          editorState={this.props.editorState}
          setEntity={setEntity}
          entityType={entityType}
          onChange={this.props.onChange}
          cancelEntity={this.cancelEntity}
          removeEntity={this.removeEntity}
          setError={this.setError}
          cancelError={this.cancelError}
          entity={entity}
          {...entityData}
        />
      );
    } else {
      console.warn("unknown entity type: " + entityType);
      return null;
    }
  }

  renderToolList() {
    return (
      <ul className="toolbar__list" onMouseDown={(x) => {
        x.preventDefault();
      }}>
        {BLOCK_TYPES.map(this.renderButton)}
        {/*{this.props.actions.map(this.renderButton)}*/}
      </ul>
    );
  }

  render() {
    if (this.props.readOnly) {
      return null;
    }

    return (
      <div className={cx(['toolbar', { 'toolbar--open': this.state.show }, { "toolbar--error": this.state.error }])}
           style={this.state.position}>
        <div style={{ position: "absolute", bottom: 0 }}>
          <div className="toolbar__wrapper" ref={(el) => {
            this.toolbarEl = el;
          }}>
            {
              this.state.editingEntity ?
                this.renderEntityInput(this.state.editingEntity) :
                this.renderToolList()
            }
            <p className="toolbar__error-msg">{this.state.error}</p>
            <span className="toolbar__arrow" ref={(el) => {
              this.arrowEl = el;
            }}/>
          </div>
        </div>
      </div>
    );
  }
}