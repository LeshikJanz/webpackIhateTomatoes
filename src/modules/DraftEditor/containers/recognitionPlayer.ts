import { connect } from 'react-redux';
import { RecognitionPlayer } from "../components/RecognitionPlayer";
import { handleCollapsePlayer, handlePlayer } from "../actions";

const mapStateToProps = (state) => ({
  isOpened: state.Knowledge.isPlayerOpen,
  isActive: state.Knowledge.isRecognitionRunning,
  isCollapsed: state.Knowledge.isPlayerCollapsed
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayer: (value: boolean) => dispatch(handlePlayer(value)),
  handlePlayerCollapse: (value: boolean) => dispatch(handleCollapsePlayer(value))
});

export default connect
(mapStateToProps, mapDispatchToProps)
(RecognitionPlayer);
