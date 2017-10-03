import { connect } from 'react-redux';
import { Research } from "../components/index";
import { compose, lifecycle, withHandlers } from 'recompose';
import { clearResearchKnowledges } from "../actions";

const mapStateToProps: any = (state): any => ({
  tags: state.Research,
  loading: state.Loading
});

const mapDispatchToProps: any = dispatch => ({
  clearKnowledges: () => dispatch(clearResearchKnowledges())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillUnmount() {
      this.props.clearKnowledges();
    }
  }))
(Research);