import { ICloud } from "interfaces/index";
import { updateCloud, handleModalAction, createCloudInit, createCloudGroupInit } from "../../actions";
import { createAction } from "utils/createAction";
const faker = require('faker');

export const getListsStart = createAction('GET_LISTS_START');
export const GET_LISTS = 'GET_LISTS';
export const MOVE_CARD = 'MOVE_CARD';
export const MOVE_LIST = 'MOVE_LIST';
export const TOGGLE_DRAGGING = 'TOGGLE_DRAGGING';

export function getLists(accountId: string) {
  return dispatch => {
    dispatch(getListsStart(accountId));
  };
}

export function moveList(lastX, nextX) {
  return (dispatch) => {
    dispatch({ type: MOVE_LIST, lastX, nextX });
  };
}

export function moveCard(lastX, lastY, nextX, nextY) {
  return (dispatch) => {
    dispatch({ type: MOVE_CARD, lastX, lastY, nextX, nextY });
  };
}

export function update(cloud: ICloud) {
  return (dispatch) => {
    dispatch(updateCloud(cloud));
  };
}

export function toggleDragging(isDragging) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_DRAGGING, isDragging });
  };
}

export function handleModal() {
  return (dispatch) => dispatch(handleModalAction())
}

export function handleCloudFormSubmit(event) {
  return (dispatch) => {
    dispatch(handleModalAction());
    dispatch(createCloudInit(event));
  }
}

export function handleCloudGroupFormSubmit(event) {
  return (dispatch) => {
    dispatch(handleModalAction());
    dispatch(createCloudGroupInit(event));
  }
}
