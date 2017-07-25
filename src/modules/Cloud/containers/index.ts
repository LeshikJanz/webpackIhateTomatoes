import { Cloud } from '../components/Cloud';
import { connect } from 'react-redux';
import { addTag } from "../../actions";

const mapStateToProps = (state) => ({
  trackNumber: state.trackNumber,
  isModalOpen: state.Modal.isModalOpen,
  clouds: state.Cloud
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTag: (tag) => dispatch(addTag(tag))
  }
}

const mergeProps = ({ trackNumber }, { dispatch }) => ({
  trackNumber,
  onClick: () => { dispatch({
    type: "ADD_TRACK",
    payload: trackNumber+1
  }) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Cloud);
