import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { UserList } from "../components/UserList";
import { getUsersInit } from "../actions";
import { connect } from 'react-redux';

const mapStateToProps: any = (state): any => ({
  users: state.Users
});

export default compose(
  connect(mapStateToProps, null, null),
  withHandlers({
    getUsers: ({ dispatch }) => () => {
      dispatch(getUsersInit())
    },
    onOpen: ({ onDropdownChange }) => () => {
      onDropdownChange(result => ({
        ...result,
        open: !result.open
      }));
    },
    onSelect: ({ onDropdownChange, onChange, items }) => (id) => {
      onDropdownChange(result => {
        const state = ({
          ...result,
          open: false,
          selected: id,
          title: items.find(item => item.id === id).title
        });

        onChange(state.selected);
        return state;
      });
    },
    onMultipleSelect: ({ onDropdownChange, onChange, items }) => (id) => {
      onDropdownChange(result => {
        const state = ({
          ...result,
          selected: toggleItemInArray(
            result.selected,
            id
          )
        });

        onChange(state.selected);
        return state;
      });
    },
    onScroll: () => (event) => event.stopPropagation(),
    clear: ({ onDropdownChange, onChange, multiple }) => () => {
      onDropdownChange(result => {
        const state = ({
          ...result,
          title: null,
          open: false,
          selected: multiple ? [] : null
        });

        onChange(state.selected);
        return state;
      });
    }
  }),
  lifecycle({
    componentDidMount() {
      const { getUsers } = this.props;
      getUsers();
    }
  })
)(UserList);
