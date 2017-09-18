import { compose, withHandlers } from 'recompose';
import { connect } from "react-redux";
import { updateKnowledgeInit } from "modules/actions";
import { VideoBlock } from "../components/VideoBlock";

const mapStateToProps = (state) => ({
  knowledge: state.Knowledge
});

export default compose(
  connect(mapStateToProps, null, null),
  withHandlers({
    updateKnowledge: ({ dispatch }) => (value) => dispatch(updateKnowledgeInit())
  })
)(VideoBlock);
