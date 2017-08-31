import { connect } from 'react-redux';
import { User } from "../components/User";
import { Navigation } from "../components/index";
import { getCloudsInit } from "modules/Sky/actions";

const mapDispatchToProps = (dispatch) => ({
  goToBoard: () => dispatch(getCloudsInit())
});

export default connect(
  null,
  mapDispatchToProps,
  null
)(Navigation);
