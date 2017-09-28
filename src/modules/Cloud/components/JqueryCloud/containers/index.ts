import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import {
  addTag, fetchCloudInit, openKnowledge, handleModalAction, clearKnowledge, updateCloudInit
} from "modules/actions";
import { filterTags, updateCloudName } from "../actions";
import { IKnowledge } from "interfaces";
import { MODAL_TYPES } from "constants/index";
import { disableHighlight, enableHighlight } from "components/Hint/actions";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud.knowledge && state.Cloud.knowledge.filter((k: IKnowledge) =>
    k.name.toLocaleLowerCase().includes(state.Filter.name.toLowerCase())),
  isModalOpen: state.Modal.isOpen,
  locationPath: state.routing.locationBeforeTransitions.pathname,
  cloud: state.Cloud,
  highlight: state.Highlight,
  loading: state.Loading,
  disabledAnimation: state.Filter.disabledAnimation
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  openEditor: () => dispatch(handleModalAction({ type: MODAL_TYPES.editor })),
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  openKnowledge: (knowledge: IKnowledge) => {
    dispatch(clearKnowledge());
    dispatch(openKnowledge(knowledge));
  },
  handleSearch: ({ target }) => dispatch(filterTags({ [target.name]: target.value })),
  updateCloudName: ({ target }) => dispatch(updateCloudName(target.value)),
  updateCloud: () => dispatch(updateCloudInit()),
  enableHighlight: (hintName: string) => dispatch(enableHighlight(hintName)),
  disableHighlight: (hintName: string) => dispatch(disableHighlight(hintName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
