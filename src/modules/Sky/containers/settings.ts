import { connect } from 'react-redux';
import { handleModalAction } from "../../actions";
import { IModal } from "interfaces";
import { Settings } from "../components/Settings";
import { updateSettingsInit } from "../actions";

const mapStateToProps: any = (state): any => ({
  modal: state.Modal
});

const mapDispatchToProps = (dispatch) => ({
  handleModal: (modal: IModal) => dispatch(handleModalAction(modal)),
  handleSettingsSubmit: () => {
    dispatch(updateSettingsInit());
    dispatch(handleModalAction());
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
