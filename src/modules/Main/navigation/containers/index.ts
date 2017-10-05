import { connect } from 'react-redux';
import { User } from "../components/User";
import { Navigation } from "../components/index";
import { getCloudsInit } from "modules/Sky/actions";
import { handleModalAction } from "modules/actions";
import { MODAL_TYPES } from "constants/index";

const mapStateToProps = (state) => ({
  location: state.routing.locationBeforeTransitions
});

const mapDispatchToProps = (dispatch) => ({
  goToBoard: () => dispatch(getCloudsInit()),
  getClouds: () => dispatch(getCloudsInit()),
  handleKnowledgeCreateModal: () => dispatch(handleModalAction({ type: MODAL_TYPES.knowledgeCreate })),
  handleNotAuthorizedModal: () => dispatch(handleModalAction(
    {
      type: MODAL_TYPES.notAuthorized,
      title: 'You are not authorized',
      text: 'You need to be authorized before you can start creating new knowledge'
    })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Navigation);
