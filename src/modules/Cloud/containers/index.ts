import { Cloud } from '../components/Cloud';
import { connect } from 'react-redux';
import { addTag } from "../../actions";

const mapStateToProps = (state) => ({
  trackNumber: state.trackNumber,
  isModalOpen: state.Modal.isModalOpen,
  knowledges: state.Cloud.knowledge
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTag: (tag) => dispatch(addTag(tag))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Cloud);
