import { connect } from 'react-redux';
import { Research } from "../components/index";

const mapStateToProps: any = (state): any => ({
  tags: state.Research,
});

export default connect(
  mapStateToProps
)(Research);