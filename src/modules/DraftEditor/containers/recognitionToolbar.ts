import { connect } from 'react-redux';
import { RecognitionToolbar } from "../components/RecognitionToolbar";
import { handlePlayer } from "../actions";

const mapStateToProps = (state) => ({
  isRunning: state.Knowledge.isRecognitionRunning
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayer: () => dispatch(handlePlayer())
});

export default connect
(mapStateToProps, mapDispatchToProps)
(RecognitionToolbar);
