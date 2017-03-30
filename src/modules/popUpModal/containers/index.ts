import { connect } from 'react-redux';
import { PopUpModal } from "../components/PopUpModal";
import { changeModalStatus } from "../../actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  changeModalStatus: () => dispatch(changeModalStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(PopUpModal);
