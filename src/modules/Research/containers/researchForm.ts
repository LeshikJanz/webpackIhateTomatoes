import { connect } from 'react-redux';
import { getKnowledgesInit } from '../actions';
import ResearchForm from "../components/researchForm";

const mapDispatchToProps = (dispatch) => ({
  getKnowledges: () => dispatch(getKnowledgesInit())
});

export default connect(
  null,
  mapDispatchToProps
)(ResearchForm);