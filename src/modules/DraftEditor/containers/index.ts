import { connect } from 'react-redux';
import LastDraft from "../components/LastDraft";
import { editKnowledge, changeKnowledgeName, closeEditor, updateKnowledge } from "modules/actions";

/**
 * Function takes a single argument of the entire Redux store’s state
 * and returns an object to be passed as props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} state - App state
 */
const mapStateToProps = ( state ) => ({
  isModalOpen: state.Modal.isModalOpen,
  knowledge: state.Knowledge
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
  closeEditor: () => {
    dispatch(closeEditor());
    dispatch(updateKnowledge());
  },
  editKnowledge: text => dispatch(editKnowledge(text)),
  handleNameChange: e => dispatch(changeKnowledgeName(e.target.value))
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
)(LastDraft);
