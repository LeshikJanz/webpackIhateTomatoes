import { createReducer } from 'utils/createReducer';
import { IModal, IUser } from "interfaces/index";
import { getUserDone, getUserInit } from "../actions";

/**
 * Initial state for modal reducer
 */
const initialState: IModal = {};

export default createReducer({
  [getUserInit]: ( state: any ) => ({
    ...initialState
  }),
  [getUserDone]: ( state: any, payload: IUser ) => ({
    ...state,
    ...payload
  }),
}, initialState);
