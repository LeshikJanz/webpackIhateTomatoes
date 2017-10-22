import { connect } from 'react-redux';
import { Settings } from "../components/index";
import { updateSettingsInit } from "../../Sky/actions";
import { push } from "react-router-redux";
import { urls } from "urls";

const mapStateToProps: any = (state): any => ({});

const mapDispatchToProps = (dispatch) => ({
  handleSettingsSubmit: () => {
    dispatch(updateSettingsInit());
    dispatch(push(urls.board))
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
  mapDispatchToProps,
  null
)(Settings);
