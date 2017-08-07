import { request } from "./base";
import { IRenewer } from "../interfaces/index";

/**
 * Creating new relation
 *
 * See: .../explorer/#!/Accounts/{id/}relations:POST
 *
 * @param {string} accountId - account id
 * @param {IRenewer} relation - renewer
 *
 * @returns {IRenewer} r - relation
 */
export const addRenewer = (accountId: string, relation: IRenewer) => {
  return request
    .post(`Accounts/${accountId}/relations`, relation)
    .then((r: IRenewer) => <IRenewer> r);
};
