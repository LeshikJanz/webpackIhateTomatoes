import { connect } from 'react-redux';
import { User } from "../components/User";
import { push } from "react-router-redux";
import { urls } from "urls";

const mapStateToProps: any = (state): any => ({
  users: state.Users
});

const mapDispatchToProps = (dispatch) => ({
  goToUserBoard: (userId: string) => dispatch(push(`user/${userId}/${urls.board}`))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(User);
