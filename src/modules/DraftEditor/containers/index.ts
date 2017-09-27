import { connect } from 'react-redux';
import {
  editKnowledge,
  changeKnowledgeName,
  updateKnowledgeInit,
  handleModalAction,
  createNewKnowledgeInit,
  deleteKnowledgeInit
} from "modules/actions";
import { createRenewerInit, handleRecognition, startRecognition, stopRecognition } from "../actions";
import { push } from "react-router-redux";
import { urls } from "urls";
import MegaDraft from "../components/Megadraft";
import { IKnowledge, IModal } from "interfaces";
import { getCloudsInit } from "modules/Sky/actions";

/**
 * Function takes a single argument of the entire Redux store’s state
 * and returns an object to be passed as props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} state - App state
 */
const mapStateToProps = (state) => ({
  knowledge: state.Knowledge,
  user: state.Knowledge.account,
  clouds: state.Sky.clouds,
  modal: state.Modal,
  isRecognitionRunning: state.Knowledge.isRecognitionRunning
});

const mergeProps: any = (props, { dispatch }): any => ({
  ...props,
  editKnowledge: (text) => dispatch(editKnowledge(text)),
  handleNameChange: (e) => dispatch(changeKnowledgeName(e.target.value)),
  closeEditor: () => {
    dispatch(stopRecognition());
    dispatch(handleModalAction());
  },
  fetchClouds: () => dispatch(getCloudsInit()),
  handleRenewing: () => {
    dispatch(createRenewerInit());
    dispatch(createNewKnowledgeInit({ fromExisting: true }));
    dispatch(handleModalAction());
  },
  goToUser: (accountId: string) => {
    dispatch(handleModalAction());
    dispatch(push(`${urls.user}/${accountId}/${urls.board}`))
  },
  deleteKnowledge: (knowledge: IKnowledge) => {
    dispatch(deleteKnowledgeInit(knowledge));
    dispatch(handleModalAction());
  },
  handleModal: (modal: IModal) => dispatch(handleModalAction(modal)),
  updateKnowledge: () => dispatch(updateKnowledgeInit()),
  startRecognition: () => dispatch(startRecognition()),
  stopRecognition: () => dispatch(stopRecognition())
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
  null,
  mergeProps
)(MegaDraft);
