import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import {
  addTag, fetchCloudInit, openKnowledge, handleModalAction, clearKnowledge, updateCloudInit
} from "modules/actions";
import { filterTags, updateCloudName } from "../actions";
import { IHighlight, IKnowledge } from "interfaces";
import { MODAL_TYPES } from "constants/index";
import { enableHighlight } from "components/Hint/actions";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud.knowledge && state.Cloud.knowledge.filter((k: IKnowledge) =>
    k.name.toLocaleLowerCase().includes(state.Filter.name.toLowerCase())),
  isModalOpen: state.Modal.isOpen,
  locationPath: state.routing.locationBeforeTransitions.pathname,
  cloud: state.Cloud
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  openEditor: () => dispatch(handleModalAction({ type: MODAL_TYPES.editor })),
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  openKnowledge: (id: string) => {
    dispatch(clearKnowledge());
    dispatch(openKnowledge(id));
  },
  handleSearch: ({ target }) => dispatch(filterTags({ [target.name]: target.value })),
  updateCloudName: ({ target }) => dispatch(updateCloudName(target.value)),
  updateCloud: () => dispatch(updateCloudInit()),
  handleHighlight: (hintName: string) => dispatch(enableHighlight(hintName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
