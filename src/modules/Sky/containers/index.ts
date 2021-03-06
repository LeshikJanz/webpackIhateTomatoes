import { compose, lifecycle, withState } from 'recompose';
import { getCloudsInit, updateLayoutAction } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";
import { handleModalAction, createCloudInit, deleteCloudInit } from "modules/actions";
import { IModal } from "interfaces/index";
import { push } from "react-router-redux";
import { urls } from "urls";

const mapStateToProps: any = (state): any => ({
  sky: state.Sky,
  modal: state.Modal,
  zoom: state.Sky.zoom,
  route: state.routing.locationBeforeTransitions.pathname,

  // subscribing on the settings form for real time updating Hint component(without page reloading)
  SettingsForm: state.form && state.form.SettingsShortForm ? state.form.SettingsShortForm : state.form.SettingsFullForm
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
