import { request } from "./base";
import { ISession } from "../interfaces/index";

export const addUserSession = (userId: string, params: ISession) => {
  return request
    .post(`Accounts/${userId}/sessions`, params)
    .then((session: ISession) => session );
};