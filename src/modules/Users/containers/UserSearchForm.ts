import { connect } from 'react-redux';
import UserSearchForm from "../components/Search/UserSearchForm";
import { getUsersInit } from "../actions";
import { compose, withState } from 'recompose';

const mapStateToProps: any = (state): any => ({
  userSearchForm: state.form && state.form.UserSearchForm && state.form.UserSearchForm.values
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsersInit())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('isNameOpened', 'handleName', true),
  withState('isAddressOpened', 'handleAddress', true)
)(UserSearchForm);
