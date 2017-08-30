import { connect } from 'react-redux';
import { SkyItem } from "../components/SkyItem";
import { handleModalAction } from "../../actions";
import { IModal } from "interfaces";

const mapStateToProps: any = (state): any => ({
  route: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = (dispatch) => ({
  handleModal: (modal: IModal) => dispatch(handleModalAction(modal)),
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
)(SkyItem);
