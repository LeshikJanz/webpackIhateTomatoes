import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import { addTag, changeModalStatus, openKnowledge, fetchCloudInit } from "../../actions";
import { IKnowledge } from "../../../interfaces/index";

const mapStateToProps = (state: any) => ({
  clouds: state.Cloud,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  changeModalStatus: () => dispatch(changeModalStatus()),
  fetchCloudInit: () => dispatch(fetchCloudInit()),
  openKnowledge: (id: string) => dispatch(openKnowledge(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
