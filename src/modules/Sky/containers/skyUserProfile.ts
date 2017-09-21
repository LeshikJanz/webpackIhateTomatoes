import { connect } from 'react-redux';
import { handleModalAction } from "../../actions";
import { IModal } from "interfaces";
import { SkyUserProfile } from "../components/SkyUserProfile";
import { getUserInit, handleProfileSidebar } from "../../Profile/actions";

const mapStateToProps: any = (state): any => ({
  user: state.Sky,
  profile: state.Profile
});

const mergeProps: any = (props, { dispatch }, ownProps): any => ({
  ...props,
  ...ownProps,
  handleModal: (modal: IModal) => dispatch(handleModalAction(modal)),
  handleProfileSidebar: (userId: string) => {
    if ( !props.profile.isOpened ) {
      dispatch(getUserInit(userId));
    }
    dispatch(handleProfileSidebar(userId));
  }
});

/**
 * Connects a React component to a Redux store.
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param options
 */
export default connect(
  mapStateToProps,
  null,
  mergeProps
)(SkyUserProfile);
