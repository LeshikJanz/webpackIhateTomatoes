import { connect } from 'react-redux';
import { User } from "../components/User";
import { push } from "react-router-redux";
import { urls } from "urls";
import { getCloudsInit } from "modules/Sky/actions";
import { getUserInit, handleProfileSidebar } from "../../Profile/actions";

const mapStateToProps: any = (state): any => ({
  users: state.Users,
  profile: state.Profile
});

const mergeProps: any = (props, { dispatch }, ownProps): any => ({
  ...props,
  ...ownProps,
  goToUserBoard: (userId: string) => {
    dispatch(getCloudsInit);
    dispatch(push(`user/${userId}/${urls.board}`))
  },
  handleProfileSidebar: (userId: string) => {
    if ( !props.profile.isOpened ) {
      dispatch(getUserInit(userId));
    }
    dispatch(handleProfileSidebar(userId));
  }
});

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(User);
