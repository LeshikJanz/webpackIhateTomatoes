import { createReducer } from 'utils/createReducer';
import { IUser } from "interfaces/index";
import { loginDone, logOutDone, loginError } from "../actions";

/**
 * Initial state for modal reducer
 */
const initialState: IUser = {
  id: "",
  avatar: "",
  username: "",
  email: "",
  accountId: "",
  emailVerified: false,
  realm: ""
};

export default createReducer({
  [loginDone]: ( state: any, payload: IUser ) => ({
    ...state,
    ...payload
  }),
  [loginError]: ( state: any, payload: Error ) => ({
    ...payload
  }),
  [logOutDone]: ( state: any ) => ({
    ...initialState
  })
}, initialState);
