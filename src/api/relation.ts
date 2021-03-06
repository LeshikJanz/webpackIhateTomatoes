import { request } from "./base";
import { IRelation } from "../interfaces/index";

/**
 * Creating new relation
 *
 * See: .../explorer/#!/Accounts/{id/}relations:POST
 *
 * @param {string} accountId - account id
 * @param {IRelation} relation - renewer
 *
 * @returns {IRelation} r - relation
 */
export const addRenewer = (accountId: string, relation: IRelation) =>
  request
    .post(`Accounts/${accountId}/relations`, relation)
    .then((r: IRelation) => <IRelation> r);