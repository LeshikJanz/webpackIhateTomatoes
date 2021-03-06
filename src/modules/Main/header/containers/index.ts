import { connect } from 'react-redux';
import { Header } from "../components/index";
import { createNewKnowledgeInit, handleModalAction } from "modules/actions";
import { getCloudsInit } from "modules/Sky/actions";
import { MODAL_TYPES } from "constants/index";
import { closeProfileSidebar, handleProfileSidebar } from "modules/Profile/actions";

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
  clouds: state.Sky.clouds,
  location: state.routing.locationBeforeTransitions,
  isProfileSidebarOpened: state.Profile.isOpened
});

/**
 * Function is a Redux action creator wrapped into a dispatch call
 * so they may be invoked directly, will be merged into the component’s props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} dispatch - dispatch
 */
const mapDispatchToProps: any = (dispatch): any => ({
  addKnowledge: () => {
    dispatch(createNewKnowledgeInit());
    dispatch(handleModalAction());
  },
  handleModal: (tag) => dispatch(handleModalAction()),
  getClouds: () => dispatch(getCloudsInit()),
  handleKnowledgeCreateModal: () => dispatch(handleModalAction({ type: MODAL_TYPES.knowledgeCreate })),
  handleNotAuthorizedModal: () => dispatch(handleModalAction(
    {
      type: MODAL_TYPES.notAuthorized,
      title: 'You are not authorized',
      text: 'You need to be authorized before you can start creating new knowledge'
    })),
  handleProfileSidebar: () => dispatch(handleProfileSidebar()),
  closeProfileSidebar: () => dispatch(closeProfileSidebar())
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
