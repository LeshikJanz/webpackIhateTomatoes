import { compose, lifecycle, withState } from 'recompose';
import { getCloudsInit, updateLayoutAction } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";
import { editKnowledge, handleModalAction, updateKnowledgeInit } from "modules/actions";
import { IModal } from "interfaces";
import Slate  from "../components/Slate";
import { State } from '../slate'

const mapStateToProps: any = (state): any => ({
  modal: state.Modal,
  route: state.routing.locationBeforeTransitions.pathname,
  knowledge: state.Knowledge
});

const mapDispatchToProps = (dispatch) => ({
  handleModal: (modal: IModal) => dispatch(handleModalAction(modal)),
  editKnowledge: (text) => dispatch(editKnowledge(text)),
  updateKnowledge: () => dispatch(updateKnowledgeInit())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null),
  withState('slateState', 'handleSlateState'),
  lifecycle({
    componentDidMount() {
      console.log('this.props.knowledge');
      console.log(this.props.knowledge);
      this.props.handleSlateState(this.props.knowledge.text);
    }
  })
)(Slate);
