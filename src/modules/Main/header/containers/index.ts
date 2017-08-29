import { connect } from 'react-redux';
import { Header } from "../components/index";
import { createNewKnowledgeInit, handleModalAction } from "modules/actions";
import { ICloudGroup, ICloud } from "interfaces/index";
import { withRouter } from 'react-router';
import { getCloudGroupsInit } from "modules/Board/actions";
import { getCloudsInit } from "../../../Sky/actions";

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
  modal: state.Modal,
  clouds: state.Sky.clouds
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
  addKnowledge: () => {
    dispatch(createNewKnowledgeInit());
    dispatch(handleModalAction());
  },
  handleModal: (tag) => dispatch(handleModalAction()),
  getClouds: () => dispatch(getCloudsInit()),
  handleKnowledgeCreateModal: () => dispatch(handleModalAction({ type: 'KnowledgeCreate' }))
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
)(Header);
