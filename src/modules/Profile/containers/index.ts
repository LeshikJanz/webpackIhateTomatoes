import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import Profile from "../components/index";
import { handleProfileSidebar, updateUserInit } from "../actions";
import '../styles/style.scss';
import { IUser } from "interfaces";
import onClickOutside from 'react-onclickoutside';
import { avatarUploadInit } from "../../Registration/actions";
import { logOutInit } from "../../Main/actions";

/**
 * Function takes a single argument of the entire Redux store’s state
 * and returns an object to be passed as props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} state - App state
 */
const mapStateToProps = (state) => ({
  user: (state.form.ProfileForm && state.form.ProfileForm.values) || state.Profile,
  initialValues: state.Profile
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handleProfileSidebar: ({ dispatch }) => () => dispatch(handleProfileSidebar()),
    logOut: () => dispatch(logOutInit()),
    onSubmit: ({ dispatch }) => (user: IUser) => {
      dispatch(updateUserInit(user));
      dispatch(handleProfileSidebar());
    },
    handleImageUpload: ({ dispatch }) => ({ files }) => dispatch(avatarUploadInit(files[0]))
  })
)(onClickOutside(Profile));