import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import Profile from "../components/index";
import { getUserInit, handleProfileSidebar } from "../actions";
import '../styles/style.scss';

const data = {  // used to populate "account" reducer when "Load" is clicked
  Name: 'Jane',
  Birthday: '1 February 2000',
  Relationship: 'Single',
  Nationality: 'American',
  Language: 'English'
}

/**
 * Function takes a single argument of the entire Redux store’s state
 * and returns an object to be passed as props
 *
 * See: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *
 * @param: {any} state - App state
 */
const mapStateToProps = (state) => ({
  user: state.Profile,
  initialValues: data
});

export default compose(
  connect(mapStateToProps, null, null),
  withHandlers({
    handleProfileSidebar: ({ dispatch }) => () => dispatch(handleProfileSidebar())
  })
)
(Profile);