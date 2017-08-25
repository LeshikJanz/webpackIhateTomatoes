import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { getUsersInit, getCloudsInit } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";

const mapStateToProps: any = (state): any => ({
  users: state.Board
});


const mapDispatchToProps = (dispatch) => ({
  getClouds: (accountId) => dispatch(getCloudsInit(accountId))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null),
  lifecycle({
    componentDidMount() {
      const accountId = localStorage.getItem('UserId');
      this.props.getClouds(accountId);
    }
  })
)(GridLayout);
