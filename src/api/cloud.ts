import { request } from "./base";
import { ICloud, IKnowledge, IUser } from "interfaces";

/**
 * Updating cloud by id
 *
 * See: .../explorer/#!/Clouds/{id}:PUT
 *
 * @param {string} id - cloud id
 * @param {ICloud} cloud - cloud
 *
 * @returns {ICloud} cloud - updated cloud
 */
export const updateCloudById = (id: string, cloud: ICloud) =>
  request
    .put(`Clouds/${id}`, cloud)
    .then((cloud: ICloud) => <ICloud> cloud);

/**
 * Fetching current user account including their clouds
 *
 * See: .../explorer/#!/Accounts/{id}:GET
 *
 * @returns
 */
export const fetchAccountWithClouds = () =>
  request
    .get(`Accounts/${localStorage.getItem('UserId')}?filter={"include":"clouds"}`, {})
    .then((a: IUser) => <IUser> a)

/**
 * Fetching cloud by id including knowledge
 *
 * See: .../explorer/#!/Clouds/{id}:GET
 * @param {string} id - cloud id
 *
 * @returns {ICloud} cloud - cloud
 */
export const fetchCloud = (id: string) =>
  request
    .get(`Clouds/${id}?filter={"include": [{"knowledge" : ["account", { "relations": "account" }]}]}`, {})
    .then((cloud: ICloud) => <ICloud> cloud);

/**
 * Creating new cloud
 *
 * See: .../explorer/#!/Clouds:POST
 * @param {ICloud} cloud - cloud
 *
 * @returns {ICloud} c - cloud
 */
export const addNewCloud = (cloud: ICloud) =>
  request
    .post(`Clouds`, cloud)
    .then((c: ICloud) => <ICloud> c);

/**
 * Updating layout
 *
 * @param {IUser} {layout, zoom} - account
 *
 * @returns {IUser}
 */
export const updateLayout = ({ layout, zoom }) =>
  request
    .patch(`Accounts/${localStorage.getItem('UserId')}`, { layout, zoom })
    .then((a: IUser) => a);

/**
 * Deleting cloud by id
 *
 * See: .../explorer/#!/Clouds/{id}:DELETE
 * @param {string} id - deleting cloud id
 *
 * @returns {string} c - amount of deleted clouds
 */
export const deleteCloud = (id: string) =>
  request
    .delete(`Clouds/${id}`)
    .then((c: string) => c)

/**
 * Fetching knowledge by id
 *
 * See: .../explorer/#!/Knowledges/{id}:GET
 * @param {string} id - knowledge id
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
export const fetchKnowledgeById = (id: string) =>
  request
    .get(`Knowledges/${id}?filter={"include": ["account"]}`, {})
    .then((knowledge: IKnowledge[]) => <IKnowledge[]> knowledge);

/**
 * Creating new knowledge
 *
 * See: .../explorer/#!/Clouds/{cloudId}/Knowledge:POST
 * @param {IKnowledge} knowledge - cloud knowledge
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
export const addNewKnowledge = (knowledge: IKnowledge) =>
  request
    .post(`Clouds/${knowledge.cloudId}/Knowledge`, knowledge)
    .then((knowledge: IKnowledge) => <IKnowledge> knowledge);

/**
 * Update knowledge by id
 *
 * See: .../explorer/#!/Knowledges/{id}:PUT
 * @param {string} id - knowledge id
 * @param {IKnowledge} knowledge - cloud knowledge
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
export const updateKnowledgeById = (id: string, knowledge: IKnowledge) =>
  request
    .put(`Knowledges/${id}`, knowledge)
    .then((knowledge: IKnowledge) => <IKnowledge> knowledge);
