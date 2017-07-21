import { connect } from 'react-redux';
import { CustomModal } from "../components/index";
import { changeModalStatus } from "../../../modules/actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  changeModalStatus: () => dispatch(changeModalStatus()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(CustomModal);
