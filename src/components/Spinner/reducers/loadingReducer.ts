import { createReducer } from 'utils/createReducer';
import { avatarUploadInit, avatarUploadDone, avatarUploadError } from "modules/Registration/actions";
import { getCloudsDone, getCloudsError, getCloudsInit } from "modules/Sky/actions";
import {
  createNewKnowledgeDone, createNewKnowledgeError, createNewKnowledgeInit, updateCloudDone, updateCloudError,
  updateCloudInit
} from "modules/actions";

/**
 * Initial state for knowledge reducer
 */
const initialState = false;

export default createReducer({
  [avatarUploadInit]: (state: any) => true,
  [avatarUploadDone || avatarUploadError]: (state: any) => false,
  [getCloudsInit]: (state: any) => true,
  [getCloudsDone || getCloudsError]: (state: any) => false,
  [createNewKnowledgeInit]: (state: any) => true,
  [createNewKnowledgeDone || createNewKnowledgeError]: (state: any) => false,
  [updateCloudInit]: (state: any) => true,
  [updateCloudDone || updateCloudError]: (state: any) => false,
}, initialState);
