import { connect } from 'react-redux';
import { Login } from "../components/index";
import { setAuthMethod } from "../../actions";

const mapStateToProps = (state: any) => ({
  authType: state.Authorisation.authType
});

const mapDispatchToProps: any = (dispatch: any) => ({
  setAuthMethod: ({ target }) => dispatch(setAuthMethod(target.className))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Login);
