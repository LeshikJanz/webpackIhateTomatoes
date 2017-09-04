import { compose, lifecycle, withState } from 'recompose';
import { getCloudsInit, deleteCloudInit, updateLayoutAction } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";
import { handleModalAction, createCloudInit } from "../../actions";
import { IModal } from "interfaces/index";
import { push } from "react-router-redux";
import { urls } from "urls";

const mapStateToProps: any = (state): any => ({
  sky: state.Sky,
  modal: state.Modal,
  zoom: state.Sky.zoom,
  route: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = (dispatch) => ({
  getClouds: (accountId) => dispatch(getCloudsInit(accountId)),
  updateLayout: (layout) => layout.length && dispatch(updateLayoutAction(layout)),
  handleCloudFormSubmit: (action) => {
    dispatch(createCloudInit(action));
    dispatch(handleModalAction());
  },
  handleModal: (modal: IModal) => dispatch(handleModalAction(modal)),
  deleteCloud: (id: string) => {
    dispatch(deleteCloudInit(id));
    dispatch(handleModalAction());
  },
  openCloud: (id) => dispatch(push(urls.cloud + '/' + id))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null),
  lifecycle({
    componentDidMount() {
      this.props.getClouds(this.props.params && this.props.params.id);
    }
  })
)(GridLayout);
