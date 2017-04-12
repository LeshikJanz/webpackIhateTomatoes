import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import { addTag, changeModalStatus } from "../../actions";

const mapStateToProps = (state) => ({
  clouds: state.Cloud,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  addTag: (tag) => dispatch(addTag(tag)),
  changeModalStatus: () => dispatch(changeModalStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
