import { connect } from 'react-redux';
import { RecognitionToolbar } from "../components/RecognitionToolbar";
import { BlockButton } from "../components/BlockButton";
import { handleRecognition } from "../../../../actions";

const mapStateToProps = (state) => ({
  isRunning: state.Knowledge.isRecognitionRunning
});

const mapDispatchToProps: any = (dispatch): any => ({
  handleRecognition: () => dispatch(handleRecognition())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlockButton);
