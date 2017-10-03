import { connect } from 'react-redux';
import {
  addTag, fetchCloudInit, openKnowledge, handleModalAction, clearKnowledge, updateCloudInit
} from "modules/actions";
import { filterTags, updateCloudName } from "../actions";
import { IKnowledge } from "interfaces";
import { MODAL_TYPES } from "constants/index";
import { disableHighlight, enableHighlight } from "components/Hint/actions";
import { CloudActions } from "../components/CloudActions";

const mapStateToProps = (state: any) => ({
  cloud: state.Cloud,
  tags: state.Cloud.knowledge && state.Cloud.knowledge.filter((k: IKnowledge) =>
    k.name.toLocaleLowerCase().includes(state.Filter.name.toLowerCase()))
});

const mapDispatchToProps: any = (dispatch: any) => ({
  updateCloudName: ({ target }) => dispatch(updateCloudName(target.value)),
  handleSearch: ({ target }) => dispatch(filterTags({ [target.name]: target.value })),
  updateCloud: () => dispatch(updateCloudInit()),
  enableHighlight: (hintName: string) => dispatch(enableHighlight(hintName)),
  disableHighlight: (hintName: string) => dispatch(disableHighlight(hintName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CloudActions);
