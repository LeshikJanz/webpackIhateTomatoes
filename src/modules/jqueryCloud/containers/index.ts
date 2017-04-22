import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import { addTag, changeModalStatus, openKnowledge, fetchCloudInit } from "../../actions";
import { push } from "react-router-redux";
import { urls } from "../../urls";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud,
  isModalOpen: state.Modal.isModalOpen
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  changeModalStatus: () => dispatch(changeModalStatus()),
  fetchCloudInit: () => dispatch(fetchCloudInit()),
  openKnowledge: (id: string) => dispatch(openKnowledge(id)),
  goToHeader: () => dispatch(push('/header'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
