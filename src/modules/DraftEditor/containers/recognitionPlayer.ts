import { connect } from 'react-redux';
import { RecognitionPlayer } from "../components/RecognitionPlayer";

const mapStateToProps = (state) => ({
  isOpened: state.Knowledge.isPlayerOpen
});

export default connect(mapStateToProps
)(RecognitionPlayer);
