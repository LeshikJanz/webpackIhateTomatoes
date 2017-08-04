import { request } from "./base";
import { ICloud, IKnowledge, ICloudGroup, IRenewer } from "../interfaces/index";

/**
 * Creating new relation
 *
 * See: .../explorer/#!/Relations:POST
 *
 * @param {IRenewer} relation - renewer
 *
 * @returns {IRenewer} r - relation
 */
export const addRenewer = (relation: IRenewer) => {
  return request
    .post(`Relations`, relation)
    .then((r: IRenewer) => <IRenewer> r);
};

/**
 * Creating new relation
 *
 * See: .../explorer/#!/Relations:Get
 *
 * @param {string} id - relation id
 *
 * @returns {IRenewer} r - relation
 */
export const getRelationById = (id: string) => {
  return request
    .post(`Relations`, relation)
    .then((r: IRenewer) => <IRenewer> r);
};
