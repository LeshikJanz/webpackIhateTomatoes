import { connect } from 'react-redux';
import UserSearchForm from "../components/Search/UserSearchForm";
import { getUsersInit } from "../actions";

const mapStateToProps: any = (state): any => ({
  userSearchForm: state.form && state.form.UserSearchForm && state.form.UserSearchForm.values
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsersInit())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserSearchForm);
