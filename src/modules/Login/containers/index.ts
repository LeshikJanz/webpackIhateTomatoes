import { compose, lifecycle, withHandlers } from 'recompose';
import { getCloudsInit, updateLayoutAction } from "../actions";
import { GridLayout } from "../components/index";
import { handleModalAction } from "modules/actions";
import { IModal } from "interfaces";
import Login from '../components';
import { loginInit } from "../../Main/actions";
import { connect } from "react-redux";
import { MODAL_TYPES } from "constants/index";

const mapStateToProps: any = (state): any => ({
  modal: state.Modal
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    onSubmit: ({ dispatch }) => () => dispatch(loginInit()),
    handleModal: ({ dispatch }) => (modal: IModal) => dispatch(handleModalAction(modal))
  }),
  lifecycle({
    componentDidMount() {
      if ( this.props.location.query.confirmed ) {
        this.props.handleModal({
          type: MODAL_TYPES.confirm,
          title: 'Great!',
          text: "You're successfully confirmed your account! Now you can sign in."
        })
      }
    }
  }),
)
(Login);
