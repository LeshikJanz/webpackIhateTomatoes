import { connect } from 'react-redux';
import { User } from "../components/User";
import { push } from "react-router-redux";
import { Navigation } from "../components/index";
import { getCloudsInit } from "modules/Sky/actions";
import { urls } from "urls";

const mapDispatchToProps = (dispatch) => ({
  goToBoard: () => {
    dispatch(getCloudsInit());
    dispatch(push(urls.board));
  },
  goToUrl: (url: string) => dispatch(push(url))
});

export default connect(
  null,
  mapDispatchToProps,
  null
)(Navigation);
