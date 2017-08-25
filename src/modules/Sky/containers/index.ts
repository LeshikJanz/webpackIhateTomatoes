import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { getUsersInit, getCloudsInit } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";
import { handleModalAction, createCloudInit } from "../../actions";
import { ICloud } from "interfaces/index";

const mapStateToProps: any = (state): any => ({
  clouds: state.Sky,
  modal: state.Modal
});

const parameters = {
  x: 0,
  y: 0,
  h: 2,
  w: 2
};

const mapDispatchToProps = (dispatch) => ({
  getClouds: (accountId) => dispatch(getCloudsInit(accountId)),
  handleModal: (modal) => dispatch(handleModalAction(modal)),
  handleCloudFormSubmit: (action) => {
    action.grid = parameters;
    dispatch(createCloudInit(action));
    dispatch(handleModalAction());
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null),
  lifecycle({
    componentDidMount() {
      this.props.getClouds(this.props.params && this.props.params.id);
    }
  })
)(GridLayout);
