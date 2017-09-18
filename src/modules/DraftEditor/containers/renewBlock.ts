import { connect } from 'react-redux';
import { RenewBlock } from "../components/RenewBlock";
import { urls } from "urls";
import { handleModalAction } from "../../actions";
import { push } from "react-router-redux";

const mapStateToProps = (state) => ({
  knowledge: state.Knowledge
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToUser: (accountId: string) => {
      dispatch(handleModalAction());
      dispatch(push(`${urls.user}/${accountId}/${urls.board}`))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(RenewBlock);
