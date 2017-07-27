import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import {
  addTag, fetchCloudInit, openKnowledge,
  openEditor
} from "modules/actions";
import { filterTags } from "../actions";
import { IKnowledge } from "interfaces/index";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud.knowledge && state.Cloud.knowledge.filter((k: IKnowledge) =>
    k.name.toLocaleLowerCase().includes(state.Filter.name.toLowerCase())),
  isEditorOpen: state.Modal.isEditorOpen,
  locationPath: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps: any = (dispatch: any) => ({
  addTag: (tag: any) => dispatch(addTag(tag)),
  openEditor: () => dispatch(openEditor()),
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  openKnowledge: (id: string) => dispatch(openKnowledge(id)),
  handleSearch: ({ target }) => dispatch(filterTags({ [target.name]: target.value }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
