import { Record } from 'immutable';

import {
  GET_CLOUD_GROUPS_DONE,
  GET_LISTS_START,
  MOVE_CARD,
  MOVE_LIST,
  TOGGLE_DRAGGING
} from '../actions/lists';
import { deleteCloudGroupInit } from "../actions";

/* eslint-disable new-cap */
const InitialState = Record({
  isFetching: false,
  lists: [],
  isDragging: false,
  userId: ''
});
/* eslint-enable new-cap */
const initialState = new InitialState;


export default function lists(state = initialState, action) {
  switch ( action.type ) {
    case GET_LISTS_START:
      return state.set('isFetching', true);
    case GET_CLOUD_GROUPS_DONE:
      return state.withMutations((ctx) => {
        ctx.set('isFetching', false)
          .set('lists', action.cloudGroups);
      });
    case MOVE_CARD: {
      const newLists = [...state.lists];
      const { lastX, lastY, nextX, nextY } = action;
      if ( lastX === nextX ) {
        newLists[lastX].clouds.splice(nextY, 0, newLists[lastX].clouds.splice(lastY, 1)[0]);
      } else {
        // move element to new place
        newLists[nextX].clouds.splice(nextY, 0, newLists[lastX].clouds[lastY]);
        // delete element from old place
        newLists[lastX].clouds.splice(lastY, 1);
      }
      return state.withMutations((ctx) => {
        ctx.set('lists', newLists);
      });
    }
    case MOVE_LIST: {
      const newLists = [...state.lists];
      const { lastX, nextX } = action;
      const t = newLists.splice(lastX, 1)[0];

      newLists.splice(nextX, 0, t);

      return state.withMutations((ctx) => {
        ctx.set('lists', newLists);
      });
    }
    case TOGGLE_DRAGGING: {
      return state.set('isDragging', action.isDragging);
    }
    case deleteCloudGroupInit().type: {
      return state.withMutations((ctx) => {
        ctx.set('lists', ctx.get('lists').filter(l => l.id !== action.payload));
      });
    }
    default:
      return state;
  }
}
