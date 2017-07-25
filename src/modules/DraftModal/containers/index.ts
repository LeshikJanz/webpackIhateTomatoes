import { connect } from 'react-redux';
import { PopUpModal } from "../components/PopUpModal";
import { updateKnowledge, closeEditor } from "../../actions";

const mapStateToProps = (state) => ({
  isEditorOpen: state.Modal.isEditorOpen
});

const mapDispatchToProps: any = dispatch => ({
  closeEditor: () => dispatch(closeEditor()),
  updateKnowledge: () => dispatch(updateKnowledge()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(PopUpModal);
