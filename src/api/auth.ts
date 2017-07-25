import { request } from "./base";
import { ICloud, IKnowledge, ICloudGroup, ILogin } from "../interfaces/index";

export const login = (params: ILogin) => {
  return request
    .post(`Accounts/login`, params)
    .then((token: any) => token);
};
