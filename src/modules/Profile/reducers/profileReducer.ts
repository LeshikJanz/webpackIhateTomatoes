import { createReducer } from 'utils/createReducer';
import { IModal, IUser } from "interfaces/index";
import { getUserDone, getUserInit, handleProfileSidebar } from "../actions";

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
  [getUserInit]: (state: any) => ({
    ...initialState,
    isOpened: state.isOpened
  }),
  [getUserDone]: (state: any, payload: IUser) => ({
    ...state,
    ...payload
  }),
}, initialState);
