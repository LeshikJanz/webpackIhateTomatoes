import { createReducer } from 'utils/createReducer';
import { avatarUploadInit, avatarUploadDone, avatarUploadError } from "modules/Registration/actions";
import { getCloudsDone, getCloudsError, getCloudsInit } from "modules/Sky/actions";

/**
 * Initial state for knowledge reducer
 */
const initialState = false;

export default createReducer({
  [avatarUploadInit]: (state: any) => true,
  [avatarUploadDone || avatarUploadError]: (state: any) => false,
  [getCloudsInit]: (state: any) => true,
  [getCloudsDone || getCloudsError]: (state: any) => false,
}, initialState);
