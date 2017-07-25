import { connect } from 'react-redux';
import { CustomModal } from "../components/index";
import { handleModalAction } from "../../../modules/actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  handleModal: () => dispatch(handleModalAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(CustomModal);
