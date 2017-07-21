import { connect } from 'react-redux';
import { Header } from "../components/index";
import { addTag, createNewKnowledge, changeModalStatus } from "../../actions";

const mapStateToProps = (state) => ({
  cloudId: state.Cloud.id,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  addTag: (tag) => dispatch(createNewKnowledge(tag)),
  changeModalStatus: (tag) => dispatch(changeModalStatus()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Header);
