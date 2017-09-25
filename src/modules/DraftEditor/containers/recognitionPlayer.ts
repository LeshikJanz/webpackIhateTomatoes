import { connect } from 'react-redux';
import { RecognitionPlayer } from "../components/RecognitionPlayer";
import { handleCollapsePlayer, handlePlayer } from "../actions";

const mapStateToProps = (state) => ({
  isOpened: state.Knowledge.isPlayerOpen,
  isCollapsed: state.Knowledge.isPlayerCollapsed
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayer: () => dispatch(handlePlayer()),
  handlePlayerCollapse: () => dispatch(handleCollapsePlayer()),
});

export default connect
(mapStateToProps, mapDispatchToProps)
(RecognitionPlayer);
