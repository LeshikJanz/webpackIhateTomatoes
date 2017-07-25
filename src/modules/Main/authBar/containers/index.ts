import { connect } from 'react-redux';
import { AuthBar } from "../components/AuthBar";
import { handleModalAction, loginInit } from "../../../actions";
import { ILogin } from "../../../../interfaces/index";
import { push } from "react-router-redux";
import { urls } from "../../../urls";

const mapStateToProps = (state) => ({
  cloudId: state.Cloud.id,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  handleModal: (tag) => dispatch(handleModalAction()),
  handleAuthFormSubmit: (credentials: ILogin) => {
    dispatch(loginInit(credentials));
    dispatch(handleModalAction());
  },
  goRegistrationPage: () => dispatch(push(urls.registration))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(AuthBar);
