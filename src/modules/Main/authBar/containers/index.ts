import { connect } from 'react-redux';
import { AuthBar } from "../components/AuthBar";
import { handleModalAction } from "../../../actions";

const mapStateToProps = (state) => ({
  cloudId: state.Cloud.id,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  handleModal: (tag) => dispatch(handleModalAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(AuthBar);
