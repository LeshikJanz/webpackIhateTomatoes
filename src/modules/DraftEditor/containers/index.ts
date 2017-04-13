import { connect } from 'react-redux';
import LastDraft from "../components/LastDraft";
import { changeModalStatus, editKnowledge } from "../../actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen,
  knowledge: state.Knowledge
});

const mapDispatchToProps: any = dispatch => ({
  changeModalStatus: () => dispatch(changeModalStatus()),
  editKnowledge: (text: {}) => dispatch(editKnowledge(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(LastDraft);
