import { connect } from 'react-redux';
import { RecognitionToolbar } from "../components/RecognitionToolbar";
import { handleCollapsePlayer, handlePlayer } from "../actions";

const mapStateToProps = (state) => ({
  isRunning: state.Knowledge.isRecognitionRunning,
  isOpened: state.Knowledge.isPlayerOpen,
  isPlayerCollapsed: state.Knowledge.isPlayerCollapsed
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayer: () => dispatch(handlePlayer()),
  handlePlayerCollapse: () => dispatch(handleCollapsePlayer())
});

export default connect
(mapStateToProps, mapDispatchToProps)
(RecognitionToolbar);
