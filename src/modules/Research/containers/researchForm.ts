import { connect } from 'react-redux';
import { getKnowledgesInit } from '../actions';
import ResearchForm from "../components/researchForm";


const mapStateToProps: any = (state): any => ({
  tags: state.Research,
  searchForm: state.form && state.form.ResearchForm && state.form.ResearchForm.values,
});

const mapDispatchToProps = (dispatch) => ({
  getKnowledges: ({ target }) => {

    // Checking if search request more than 2 symbols
    if ( target.name === 'name' && target.value.length > 2 ) {
      dispatch(getKnowledgesInit())
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResearchForm);