import { compose, withHandlers } from 'recompose';
import { connect } from "react-redux";
import { updateKnowledgeInit } from "modules/actions";
import { VideoBlock } from "../components/VideoBlock";

export default compose(
  connect(),
  withHandlers({
    updateKnowledge: ({ dispatch }) => (value) => dispatch(updateKnowledgeInit())
  })
)(VideoBlock);
