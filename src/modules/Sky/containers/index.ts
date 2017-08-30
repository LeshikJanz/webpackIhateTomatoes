import { compose, lifecycle, withState } from 'recompose';
import { getUsersInit, getCloudsInit, updateLayout, deleteCloudInit } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";
import { handleModalAction, createCloudInit } from "../../actions";
import { IModal } from "interfaces/index";
import { urls } from "../../urls";

const mapStateToProps: any = (state): any => ({
  sky: state.Sky,
  modal: state.Modal,
  zoom: state.Sky.zoom,
  routing: state.routing.locationBeforeTransitions
});

const mapDispatchToProps = (dispatch) => ({
  getClouds: (accountId) => dispatch(getCloudsInit(accountId)),
  updateLayout: (layout) => layout.length && dispatch(updateLayout(layout)),
  handleCloudFormSubmit: (action) => {
    dispatch(createCloudInit(action));
    dispatch(handleModalAction());
  },
  handleModal: (modal: IModal) => dispatch(handleModalAction(modal)),
  deleteCloud: (id: string) => {
    dispatch(deleteCloudInit(id));
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
