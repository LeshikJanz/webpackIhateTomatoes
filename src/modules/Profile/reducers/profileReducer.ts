import { createReducer } from 'utils/createReducer';
import { IModal, IUser } from "interfaces/index";
import { closeProfileSidebar, getUserDone, getUserInit, handleProfileSidebar } from "../actions";

/**
 * Initial state for modal reducer
 */
const initialState: IModal = {
  isOpened: false,
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
}, initialState);
