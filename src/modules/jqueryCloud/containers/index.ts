import { connect } from 'react-redux';
import { TagCloud } from "../components/index";
import { addTag } from "../../actions";

const mapStateToProps = (state) => ({
  clouds: state.Cloud
});

const mapDispatchToProps: any = dispatch => ({
  addTag: (tag) => dispatch(addTag(tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TagCloud);
