import { createReducer } from 'utils/createReducer';
import { avatarUploadInit, avatarUploadDone, avatarUploadError } from "modules/Registration/actions";
import { getCloudsDone, getCloudsError, getCloudsInit } from "modules/Sky/actions";
import {
  createNewKnowledgeDone, createNewKnowledgeError, createNewKnowledgeInit,
  fetchCloudDone, fetchCloudError, fetchCloudInit,
  updateCloudDone, updateCloudError, updateCloudInit,
  updateKnowledgeDone, updateKnowledgeError, updateKnowledgeInit
} from "modules/actions";
import { getUserDone, getUserError, getUserInit } from "modules/Profile/actions";
import { getKnowledgesDone, getKnowledgesError, getKnowledgesInit } from "modules/Research/actions";
import { getUsersDone, getUsersError, getUsersInit } from "modules/Users/actions";

/**
 * Initial state for knowledge reducer
 */
const initialState = false;

export default createReducer({
  [avatarUploadInit]: (state: any) => true,
  [avatarUploadDone]: (state: any) => false,
  [avatarUploadError]: (state: any) => false,
  [getCloudsInit]: (state: any) => true,
  [getCloudsDone]: (state: any) => false,
  [getCloudsError]: (state: any) => false,
  [fetchCloudInit]: (state: any) => true,
  [fetchCloudDone]: (state: any) => false,
  [fetchCloudError]: (state: any) => false,
  [createNewKnowledgeInit]: (state: any) => true,
  [createNewKnowledgeDone]: (state: any) => false,
  [createNewKnowledgeError]: (state: any) => false,
  [updateCloudInit]: (state: any) => true,
  [updateCloudDone]: (state: any) => false,
  [updateCloudError]: (state: any) => false,
  [updateKnowledgeInit]: (state: any) => true,
  [updateKnowledgeDone]: (state: any) => false,
  [updateKnowledgeError]: (state: any) => false,
  [getUserInit]: (state: any) => true,
  [getUserDone]: (state: any) => false,
  [getUserError]: (state: any) => false,
  [getUsersInit]: (state: any) => true,
  [getUsersDone]: (state: any) => false,
  [getUsersError]: (state: any) => false,
  [getKnowledgesInit]: (state: any) => true,
  [getKnowledgesDone]: (state: any) => false,
  [getKnowledgesError]: (state: any) => false,
}, initialState);
