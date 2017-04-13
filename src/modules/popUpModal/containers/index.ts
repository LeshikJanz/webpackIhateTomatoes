import { connect } from 'react-redux';
import { PopUpModal } from "../components/PopUpModal";
import { changeModalStatus, updateKnowledge } from "../../actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  changeModalStatus: () => dispatch(changeModalStatus()),
  updateKnowledge: () => dispatch(updateKnowledge()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(PopUpModal);
