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
  loading: state.Loading
});

const mapDispatchToProps: any = (dispatch: any) => ({
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  updateCloud: () => dispatch(updateCloudInit()),
  enableHighlight: (hintName: string) => dispatch(enableHighlight(hintName)),
  disableHighlight: (hintName: string) => dispatch(disableHighlight(hintName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
