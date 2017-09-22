import { connect } from 'react-redux';
import { RecognitionToolbar } from "../components/RecognitionToolbar";

const mapStateToProps = (state) => ({
  isRunning: state.Knowledge.isRecognitionRunning
});

export default connect(mapStateToProps)(RecognitionToolbar);
