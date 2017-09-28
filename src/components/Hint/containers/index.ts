import { connect } from 'react-redux';
import { Hint } from "../components";

const mapStateToProps: any = (state): any => ({
  highlight: state.Highlight,

  // subscribing on the settings form for real time updating Hint component(without page reloading)
  SettingsShortForm: state.form && state.form.SettingsForm
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
export default connect(mapStateToProps)(Hint);
