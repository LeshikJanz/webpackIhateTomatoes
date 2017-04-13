import { connect } from 'react-redux';
import LastDraft from "../components/LastDraft";
import { changeModalStatus, editKnowledge, changeKnowledgeName } from "../../actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen,
  knowledge: state.Knowledge
});

const mapDispatchToProps: any = dispatch => ({
  changeModalStatus: () => dispatch(changeModalStatus()),
  editKnowledge: (text: {}) => dispatch(editKnowledge(text)),
  handleNameChange: (e) => {
    console.log(e.target.value);
    dispatch(changeKnowledgeName(e.target.value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(LastDraft);
