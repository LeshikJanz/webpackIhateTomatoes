import { connect } from 'react-redux';
import { Header } from "../components/index";
import { addTag, createNewKnowledge } from "../../actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps: any = dispatch => ({
  addTag: (tag) => dispatch(createNewKnowledge(tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Header);