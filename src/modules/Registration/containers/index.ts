import { Registration } from '../components/Registration';
import { connect } from 'react-redux';
import { IUser } from "interfaces/index";
import { createAccountInit } from "../actions";

const mapStateToProps = (state) => ({
  isModalOpen: state.Modal.isModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleRegistrationFormSubmit: (regForm: IUser) => dispatch(createAccountInit(regForm))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Registration);
