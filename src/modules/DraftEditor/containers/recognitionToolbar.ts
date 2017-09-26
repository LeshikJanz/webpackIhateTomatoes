import { connect } from 'react-redux';
import { RecognitionToolbar } from "../components/RecognitionToolbar";
import { handleCollapsePlayer, handlePlayer } from "../actions";

const mapStateToProps = (state) => ({
  isRunning: state.Knowledge.isRecognitionRunning,
  isOpened: state.Knowledge.isPlayerOpen,
  isPlayerCollapsed: state.Knowledge.isPlayerCollapsed
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayer: (value: boolean) => dispatch(handlePlayer(value)),
  handlePlayerCollapse: (value: boolean) => dispatch(handleCollapsePlayer(value))
});

export default connect
(mapStateToProps, mapDispatchToProps)
(RecognitionToolbar);
