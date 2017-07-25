import { request } from "./base";
import { ICloud, IKnowledge, ICloudGroup, ILogin, IUser } from "../interfaces/index";

export const login = (params: ILogin) => {
  return request
    .post(`Accounts/login`, params)
    .then((token: any) => token);
};

export const register = (params: ILogin) => {
  return request
    .post(`Accounts`, params)
    .then((user: IUser) => user);
};
