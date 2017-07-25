import { request } from "./base";
import { ISession } from "../interfaces/index";

/**
 * Adding user session by id
 *
 * See: .../explorer/#!/Accounts/{userId}/sessions:POST
 * @param {string} userId - user id
 * @param {ISession} session - session
 *
 * @returns {ISession} session - created session
 */
export const addUserSession = (userId: string, session: ISession) => {
  return request
    .post(`Accounts/${userId}/sessions`, session)
    .then((session: ISession) => session );
};