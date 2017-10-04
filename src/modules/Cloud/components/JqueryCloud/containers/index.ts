import { connect } from 'react-redux';
import { TagCloud } from "../components";
import { fetchCloudInit, updateCloudInit } from "modules/actions";
import { IKnowledge } from "interfaces";
import { disableHighlight, enableHighlight } from "components/Hint/actions";
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { DEFAULT_CLOUD_ID } from "constants";

const mapStateToProps = (state: any) => ({
  tags: state.Cloud.knowledge && state.Cloud.knowledge.filter((k: IKnowledge) =>
    k.name.toLocaleLowerCase().includes(state.Filter.name.toLowerCase())),
  isModalOpen: state.Modal.isOpen,
  locationPath: state.routing.locationBeforeTransitions.pathname,
  cloud: state.Cloud,
  highlight: state.Highlight,
  // loading: state.Loading
});

const mapDispatchToProps: any = (dispatch: any) => ({
  fetchCloudInit: (cloudId: string) => dispatch(fetchCloudInit(cloudId)),
  updateCloud: () => dispatch(updateCloudInit()),
  enableHighlight: (hintName: string) => dispatch(enableHighlight(hintName)),
  disableHighlight: (hintName: string) => dispatch(disableHighlight(hintName))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleKnowledgeCreateButtonHighlight: (props) => () => {
      if ( !props.tags.length && props.locationPath.indexOf('/cloud') === 0 ) {
        !props.highlight.enabled && props.enableHighlight('createKnowledge')
      } else {
        props.highlight.enabled && props.disableHighlight('createKnowledge')
      }
    },
    handleKeyPress: (props) => ({ key }) => {
      if ( key === 'Enter' ) {
        props.updateCloud();
        this.cloudNameInput.blur();
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchCloudInit(this.props.cloudId || DEFAULT_CLOUD_ID);
    },
    componentDidUpdate(){
      this.props.handleKnowledgeCreateButtonHighlight();
    },
    shouldComponentUpdate(nextProps, nextState) {
      return !nextProps.isModalOpen;
    }
  })
)(TagCloud);
