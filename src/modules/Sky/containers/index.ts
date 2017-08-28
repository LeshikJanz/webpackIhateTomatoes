import { compose, lifecycle, withState } from 'recompose';
import { getUsersInit, getCloudsInit, updateLayout, getCloudsDone } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";
import { handleModalAction, createCloudInit } from "../../actions";

const mapStateToProps: any = (state): any => ({
  sky: state.Sky,
  modal: state.Modal,
  zoom: state.Sky.zoom
});

const mapDispatchToProps = (dispatch) => ({
  getClouds: (accountId) => dispatch(getCloudsInit(accountId)),
  handleModal: (modal) => dispatch(handleModalAction({ type: modal })),
  updateLayout: (layout) => layout.length && dispatch(updateLayout(layout)),
  handleCloudFormSubmit: (action) => {
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
