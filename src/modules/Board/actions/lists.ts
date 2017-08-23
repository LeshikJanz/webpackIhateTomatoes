import { ICloud, IModal, ICloudGroup } from "interfaces/index";
import {
  updateCloud, handleModalAction, createCloudInit, createCloudGroupInit,
  updateCloudGroupInit
} from "../../actions";
import { deleteCloudInit, deleteCloudGroupInit, getCloudGroupsInit } from "../actions";
const faker = require('faker');

export const GET_CLOUD_GROUPS_DONE = 'GET_CLOUD_GROUPS_DONE';
export const MOVE_CARD = 'MOVE_CARD';
export const MOVE_LIST = 'MOVE_LIST';
export const TOGGLE_DRAGGING = 'TOGGLE_DRAGGING';

/**
 * Get Cloud groups and cloud for account
 *
 * @param {string} accountId - user id
 *
 * @return {any}
 */
export function getLists(accountId: string) {
  return dispatch =>
    dispatch(getCloudGroupsInit({ accountId, sort: accountId === localStorage.getItem('UserId') }))
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

export function update(cloud: ICloud, cloudGroup: ICloudGroup[]) {
  return (dispatch) => {
    if ( cloud.accountId === localStorage.getItem('UserId') ) {
      dispatch(updateCloud(cloud));
      dispatch(updateCloudGroupInit(cloudGroup));
    }
  };
}

export function toggleDragging(isDragging) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_DRAGGING, isDragging });
  };
}

export function handleModal(modal: IModal) {
  return (dispatch) => dispatch(handleModalAction(modal))
}

export function handleCloudFormSubmit(cloud) {
  return (dispatch) => {
    dispatch(handleModalAction());
    dispatch(createCloudInit(event));
  }
}

export function handleCloudGroupFormSubmit(cloudGroup: ICloudGroup) {
  return (dispatch) => {
    dispatch(handleModalAction());
    dispatch(createCloudGroupInit(event));
  }
}

export const deleteCloudGroup = (cloudGroupId: string) => (dispatch) => {
  dispatch(deleteCloudGroupInit(cloudGroupId));
  dispatch(handleModalAction());
};

export const deleteCloud = (cloudId: string) => (dispatch) => {
  dispatch(deleteCloudInit(cloudId));
  dispatch(handleModalAction());
};

