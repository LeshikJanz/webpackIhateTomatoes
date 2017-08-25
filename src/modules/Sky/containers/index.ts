import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { getUsersInit, getCloudsInit } from "../actions";
import { connect } from 'react-redux';
import { GridLayout } from "../components/index";
import { handleModalAction } from "../../actions";

const mapStateToProps: any = (state): any => ({
  clouds: state.Sky,
  modal: state.Modal
});


const mapDispatchToProps = (dispatch) => ({
  getClouds: (accountId) => dispatch(getCloudsInit(accountId)),
  handleModal: (modal) => dispatch(handleModalAction(modal)),
  handleCloudFormSubmit: () => console.log("handleCloudFormSubmit")
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null),
  lifecycle({
    componentDidMount() {
      this.props.getClouds(this.props.params && this.props.params.id);
    }
  })
)(GridLayout);
