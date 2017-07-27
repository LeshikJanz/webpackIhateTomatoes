import { connect } from 'react-redux';
import { AuthBar } from "../components/AuthBar";
import { handleModalAction } from "../../../actions";
import { ILogin } from "interfaces/index";
import { push } from "react-router-redux";
import { urls } from "modules/urls";
import { loginInit } from "../../actions";

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
  modal: state.Modal
});

/**
 * Function is a Redux action creator wrapped into a dispatch call
 * so they may be invoked directly, will be merged into the component’s props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} dispatch - dispatch
 */
const mapDispatchToProps: any = dispatch => ({
  handleModal: (tag) => dispatch(handleModalAction({ type: 'Auth' })),
  handleAuthFormSubmit: (credentials: ILogin) => {
    dispatch(loginInit(credentials));
    dispatch(handleModalAction());
  },
  goRegistrationPage: () => dispatch(push(urls.registration))
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
  mapDispatchToProps,
  null
)(AuthBar);
