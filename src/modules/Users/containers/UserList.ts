import { compose, withHandlers } from 'recompose';
import { UserList } from "../components/UserList";
import { getUsersInit } from "../actions";
import { connect } from 'react-redux';
import { IUser } from "interfaces";

const mapStateToProps: any = (state): any => ({
  users: state.Users.filter((u: IUser) => u.id !== localStorage.getItem('UserId')),
  userSearchForm: state.form && state.form.UserSearchForm && state.form.UserSearchForm.values
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    getUsers: ({ dispatch }) => (event) =>
      dispatch(getUsersInit(event && event.target && event.target.value))
  })
)(UserList);
