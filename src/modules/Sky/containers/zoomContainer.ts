import { connect } from 'react-redux';
import { handleZoom } from "../actions";
import { ZoomPanel } from "../components/ZoomPanel";

const mapStateToProps: any = (state): any => ({
  zoom: state.Sky.zoom
});

const mapDispatchToProps = (dispatch) => ({
  handleZoom: (zoom: number) => dispatch(handleZoom(zoom))
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
  mapDispatchToProps,
  null
)(ZoomPanel);
