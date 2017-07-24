import { connect } from 'react-redux';
import { Header } from "../components/index";
import { createNewKnowledge, handleModalAction } from "../../../actions";

const mapStateToProps = (state) => ({
  cloudId: state.Cloud.id,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  addTag: (tag) => dispatch(createNewKnowledge(tag)),
  handleModalAction: (tag) => dispatch(handleModalAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Header);
