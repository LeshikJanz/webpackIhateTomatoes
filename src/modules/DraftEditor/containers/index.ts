import { connect } from 'react-redux';
import {
  editKnowledge, changeKnowledgeName, updateKnowledge, handleModalAction, createNewKnowledgeInit
} from "modules/actions";
import { createRenewerInit } from "../actions";
import { push } from "react-router-redux";
import { urls } from "urls";
import MegaDraft from "../components/Megadraft";

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
  clouds: state.Sky.clouds
});

const mergeProps: any = (props, { dispatch }): any => ({
  ...props,
  editKnowledge: (text) => dispatch(editKnowledge(text)),
  handleNameChange: (e) => dispatch(changeKnowledgeName(e.target.value)),
  closeEditor: () => {
    dispatch(handleModalAction());
    props.knowledge.accountId === localStorage.getItem('UserId') && dispatch(updateKnowledge());
  },
  handleRenewing: () => {
    dispatch(createRenewerInit());
    dispatch(createNewKnowledgeInit({ fromExisting: true }));
    dispatch(handleModalAction());
  },
  goToUser: (accountId: string) => {
    dispatch(handleModalAction());
    dispatch(push(`${urls.user}/${accountId}/${urls.board}`))
  }
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
