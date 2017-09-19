import { request } from "./base";
import { ILogin, IUser, IToken } from "../interfaces/index";

/**
 * Api for user login POST /Accounts/login
 *
 * See: .../explorer/#!/Account/Account_login
 *
 * @param {ILogin} params - Login parameters
 * @returns {IToken} token - Token
 */
export const login = (params: ILogin) => {
  return request
    .post(`Accounts/login`, params)
    .then((token: IToken) => token);
};

/**
 * Api for user log out POST /Accounts/logout
 *
 * See: .../explorer/#!/Account/Account_logout
 */
export const logOut = () => {
  return request
    .post(`Accounts/logout`)
    .then(() => "Success")
    .catch(() => 'Logged out')
};

/**
 * Api for user registration POST /Accounts
 *
 * See: .../explorer/#!/Account/Account_login
 *
 * @param {IUser} params - User registration parameters
 * @returns {IUser} user - Registered user
 */
export const register = (params: IUser) => {
  return request
    .post(`Accounts`, params)
    .then((user: IUser) => user);
};
