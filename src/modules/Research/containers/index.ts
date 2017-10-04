import { connect } from 'react-redux';
import { Research } from "../components/index";
import { compose, lifecycle, withHandlers } from 'recompose';
import { clearResearchKnowledges } from "../actions";

const mapStateToProps: any = (state): any => ({
  tags: state.Research,
  searchForm: state.form && state.form.ResearchForm && state.form.ResearchForm.values,
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