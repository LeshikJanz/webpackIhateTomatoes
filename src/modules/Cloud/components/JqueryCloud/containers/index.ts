import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import { push } from "react-router-redux";
import { addTag, changeModalStatus, fetchCloudInit, openKnowledge } from "../../../../actions";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud.knowledge,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  changeModalStatus: () => dispatch(changeModalStatus()),
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  openKnowledge: (id: string) => dispatch(openKnowledge(id)),
  goToHeader: () => dispatch(push('/board'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
