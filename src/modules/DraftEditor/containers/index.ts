import { connect } from 'react-redux';
import LastDraft from "../components/LastDraft";
import { editKnowledge, changeKnowledgeName, closeEditor } from "../../actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen,
  knowledge: state.Knowledge
});

const mapDispatchToProps: any = dispatch => ({
  closeEditor: () => dispatch(closeEditor()),
  editKnowledge: (text: {}) => dispatch(editKnowledge(text)),
  handleNameChange: (e) => dispatch(changeKnowledgeName(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(LastDraft);
