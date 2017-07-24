import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import { push } from "react-router-redux";
import {
  addTag, handleModalAction, fetchCloudInit, openKnowledge, handleEditorAction,
  openEditor
} from "../../../../actions";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud.knowledge,
  isEditorOpen: state.Modal.isEditorOpen
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  openEditor: () => dispatch(openEditor()),
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  openKnowledge: (id: string) => dispatch(openKnowledge(id)),
  goToHeader: () => dispatch(push('/board'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
