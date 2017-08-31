import { request } from "./base";
import { ICloud, IKnowledge, ICloudGroup, IGridItem } from "../interfaces/index";

/**
 * Fetching clouds
 *
 * See: .../explorer/#!/Clouds:GET
 *
 * @returns {ICloud[]} clouds - clouds
 */
export const fetchSkiesByAccountId = (accountId: string = localStorage.getItem('UserId')) => {
  return request
    .get(`Skies?filter={"include": "clouds", "where": {"accountId": "${accountId}"}}`, {})
    // For now one user has one sky
    .then((skies) => skies[0])
};

/**
 * Fetching cloud groups including clouds
 *
 * See: .../explorer/#!/CloudGroups:GET
 *
 * @returns {ICloudGroup[]} cloudGroups - cloud groups
 */
export const fetchCloudGroups = (accountId?: string) => {
  return request
    .get('CloudGroups?filter={"include": [{ "clouds": ["account", {"relations":"account"}]}]' + (accountId ? `, "where": {"accountId": "${accountId}"}}` : '}'), {})
    .then((cloudGroups: ICloudGroup[]) => cloudGroups)
};

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
export const updateCloudById = (id: string, cloud: ICloud) => {
  return request
    .put(`Clouds/${id}`, cloud)
    .then((cloud: ICloud) => <ICloud> cloud);
};

/**
 * Updating cloud group by id
 *
 * See: .../explorer/#!/CloudGroups/{id}:PUT
 *
 * @param {string} id - cloud group id
 * @param {ICloudGroup} cloudGroup - cloud group
 *
 * @returns {ICloud} cloud - updated cloud
 */
export const updateCloudGroupById = (id: string, cloudGroup: ICloudGroup) => {
  return request
    .put(`CloudGroups/${id}`, cloudGroup)
    .then((cloudGroup: ICloudGroup) => <ICloudGroup> cloudGroup);
};

/**
 * Fetching cloud by id including knowledge
 *
 * See: .../explorer/#!/Clouds/{id}:POST
 * @param {string} id - cloud id
 *
 * @returns {ICloud} cloud - cloud
 */
export const fetchCloud = (id: string) => {
  return request
    .get(`Clouds/${id}?filter={"include": [{"knowledge" : ["account", { "relations": "account" }]}]}`, {})
    .then((cloud: ICloud) => <ICloud> cloud);
};

/**
 * Creating new cloud
 *
 * See: .../explorer/#!/Clouds:POST
 * @param {ICloud} cloud - cloud
 *
 * @returns {ICloud} c - cloud
 */
export const addNewCloud = (cloud: ICloud) => {
  return request
    .post(`Clouds`, cloud)
    .then((c: ICloud) => <ICloud> c);
};

/**
 * Update layout
 */
// export const updateGridLayout = (layout) => {
//   return request
//     .post(`Clouds/updateGrid`, { data: layout })
//     .then((c) => c);
// };

export const updateSkyLayout = (id: string, sky) => {
  return request
    .patch(`Skies/${id}`, { layout: sky.layout, zoom: sky.zoom })
    .then((c) => c);
};

/**
 * Creating new cloud group
 *
 * See: .../explorer/#!/CloudGroups/{id}/clouds:POST
 * @param {ICloudGroup} cloudGroup - cloud group
 *
 * @returns {ICloudGroup} c - cloud group
 */
export const addNewCloudGroup = (cloudGroup: ICloudGroup) => {
  return request
    .post(`CloudGroups`, cloudGroup)
    .then((c: ICloudGroup) => <ICloudGroup> c);
};

/**
 * Deleting cloud group by id
 *
 * See: .../explorer/#!/CloudGroups/{id}:DELETE
 * @param {string} id - deleting cloud group id
 *
 * @returns {string} c - amount of deleted cloud groups
 */
export const deleteCloudGroup = (id: string) => {
  return request
    .delete(`CloudGroups/${id}`)
    .then((c: string) => c);
};

/**
 * Deleting cloud by id
 *
 * See: .../explorer/#!/Clouds/{id}:DELETE
 * @param {string} id - deleting cloud id
 *
 * @returns {string} c - amount of deleted clouds
 */
export const deleteCloud = (id: string) => {
  return request
    .delete(`Clouds/${id}`)
    .then((c: string) => c)
};

/**
 * Fetching knowledge by id
 *
 * See: .../explorer/#!/Knowledges/{id}:GET
 * @param {string} id - knowledge id
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
export const fetchKnowledgeById = (id: string) => {
  return request
    .get(`Knowledges/${id}?filter={"include": ["account"]}`, {})
    .then((knowledge: IKnowledge[]) => <IKnowledge[]> knowledge);
};

/**
 * Creating new knowledge
 *
 * See: .../explorer/#!/Clouds/{cloudId}/Knowledge:POST
 * @param {IKnowledge} knowledge - cloud knowledge
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
export const addNewKnowledge = (knowledge: IKnowledge) => {
  return request
    .post(`Clouds/${knowledge.cloudId}/Knowledge`, knowledge)
    .then((knowledge: IKnowledge) => <IKnowledge> knowledge);
};

/**
 * Update knowledge by id
 *
 * See: .../explorer/#!/Knowledges/{id}:PUT
 * @param {string} id - knowledge id
 * @param {IKnowledge} knowledge - cloud knowledge
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
export const updateKnowledgeById = (id: string, knowledge: IKnowledge) => {
  return request
    .put(`Knowledges/${id}`, knowledge)
    .then((knowledge: IKnowledge) => <IKnowledge> knowledge);
};
