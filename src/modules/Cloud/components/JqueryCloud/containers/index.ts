import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import {
  addTag, fetchCloudInit, openKnowledge, handleModalAction, updateCloud, clearKnowledge
} from "modules/actions";
import { filterTags, updateCloudName } from "../actions";
import { IKnowledge, ICloudGroup } from "interfaces/index";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud.knowledge && state.Cloud.knowledge.filter((k: IKnowledge) =>
    k.name.toLocaleLowerCase().includes(state.Filter.name.toLowerCase())),
  isModalOpen: state.Modal.isOpen,
  locationPath: state.routing.locationBeforeTransitions.pathname,
  cloud: state.Cloud
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  openEditor: () => dispatch(handleModalAction({ type: "Editor" })),
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  openKnowledge: (id: string) => {
    dispatch(clearKnowledge());
    dispatch(openKnowledge(id));
  },
  handleSearch: ({ target }) => dispatch(filterTags({ [target.name]: target.value })),
  updateCloudName: ({ target }) => dispatch(updateCloudName(target.value)),
  updateCloud: (cloud) => dispatch(updateCloud(cloud))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
