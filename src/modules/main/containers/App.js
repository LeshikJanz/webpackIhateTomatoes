import { App } from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  trackNumber: state.trackNumber
});

const mergeProps = ({ trackNumber }, { dispatch }) => ({
  trackNumber,
  // handleItemRemove: () => { dispatch(removeLoopgroupFromTimelineInit(ownProps.id)) },
  onClick: () => { dispatch({
    type: "ADD_TRACK",
    payload: trackNumber+1
  }) }
});

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(App);
