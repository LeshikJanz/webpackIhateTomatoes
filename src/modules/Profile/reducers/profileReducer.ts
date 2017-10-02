import { createReducer } from 'utils/createReducer';
import { IModal, IUser } from "interfaces/index";
import {
  closeProfileSidebar, getUserDone, getUserInit, handleProfileSidebar
} from "../actions";
import { avatarUploadDone, avatarUploadError, avatarUploadInit } from "../../Registration/actions";

/**
 * Initial state for modal reducer
 */
const initialState: IModal = {
  isOpened: false,
  loading: false,
  id: ''
};

export default createReducer({
  [handleProfileSidebar]: (state: any, payload: string) => ({
    ...state,
    isOpened: !state.isOpened,
    id: payload
  }),
  [closeProfileSidebar]: (state: any, payload: string) => ({
    ...state,
    isOpened: false
  }),
  [getUserInit]: (state: any) => ({
    ...initialState,
    isOpened: state.isOpened
  }),
  [getUserDone]: (state: any, payload: IUser) => ({
    ...state,
    ...payload
  }),
  [avatarUploadInit]: (state: any) => ({
    ...state,
    loading: true
  }),
  [avatarUploadDone]: (state: any) => ({
    ...state,
    loading: false
  }),
  [avatarUploadError]: (state: any) => ({
    ...state,
    loading: false
  }),
}, initialState);
