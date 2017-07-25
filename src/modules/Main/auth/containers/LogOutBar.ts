import { connect } from 'react-redux';
import { LogOutBar } from "../components/LogOutBar";
import { logOutInit } from "../../actions";

const mapStateToProps = (state) => ({
  cloudId: state.Cloud.id,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  logOut: () => dispatch(logOutInit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(LogOutBar);
