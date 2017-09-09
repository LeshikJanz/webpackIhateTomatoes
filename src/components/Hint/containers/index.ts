import { connect } from 'react-redux';
import { Hint } from "../components/index";

const mapStateToProps: any = (state): any => ({
  highlight: state.Highlight
});

/**
 * Connects a React component to a Redux store.
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param options
 */
export default connect(
  mapStateToProps,
  null,
  null
)(Hint);
