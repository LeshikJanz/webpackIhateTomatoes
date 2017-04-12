import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import { addTag, changeModalStatus, fetchCloud } from "../../actions";
import { IKnowledge } from "../../../interfaces/index";

const mapStateToProps = (state) => ({
  clouds: state.Cloud,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = dispatch => ({
  addTag: (tag) => dispatch(addTag(tag)),
  changeModalStatus: () => dispatch(changeModalStatus()),
  fetchCloud: (cloud: IKnowledge[]) => dispatch(fetchCloud(cloud))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
