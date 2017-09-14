import { compose, withState, withHandlers } from 'recompose';
import { UserList } from "../components/UserList";
import { getUsersInit } from "../actions";
import { ImageBlock } from "../components/ImageBlock";
import { DEFAULT_WIDTH } from "../constants/index";
import { connect } from "react-redux";
import { updateKnowledgeInit } from "modules/actions";

export default compose(
  connect(),
  withHandlers({
    updateKnowledge: ({ dispatch }) => (value) =>dispatch(updateKnowledgeInit())
  }),
  withState('imgPosition', 'setImgPosition'),
  withState('imgZoom', 'handleZoom', DEFAULT_WIDTH),
)(ImageBlock);
