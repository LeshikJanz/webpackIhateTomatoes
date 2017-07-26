import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { UserList } from "../components/UserList";
import { getUsersInit } from "../actions";
import { connect } from 'react-redux';

const mapStateToProps: any = (state): any => ({
  users: state.Users
});

export default compose(
  connect(mapStateToProps, null, null),
  withHandlers({
    getUsers: ({ dispatch }) => (event) =>
      dispatch(getUsersInit(event && event.target && event.target.value))
  }),
  lifecycle({
    componentDidMount() {
      const { getUsers } = this.props;
      getUsers();
    }
  })
)(UserList);
