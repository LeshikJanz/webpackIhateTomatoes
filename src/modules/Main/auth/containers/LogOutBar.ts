import { connect } from 'react-redux';
import { LogOutBar } from "../components/LogOutBar";
import { logOutInit } from "../../actions";
import { urls } from "urls";
import { push } from "react-router-redux";
import { getUserInit, handleProfileSidebar } from "modules/Profile/actions";

/**
 * Function takes a single argument of the entire Redux store’s state
 * and returns an object to be passed as props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} state - App state
 */
const mapStateToProps = (state) => ({
  cloudId: state.Cloud.id,
  isModalOpen: state.Modal.isModalOpen,
  profile: state.Profile
});

/**
 * Function is a Redux action creator wrapped into a dispatch call
 * so they may be invoked directly, will be merged into the component’s props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} dispatch - dispatch
 */
const mergeProps: any = (props, { dispatch }): any => ({
  ...props,
  logOut: () => dispatch(logOutInit()),
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
)(LogOutBar);
