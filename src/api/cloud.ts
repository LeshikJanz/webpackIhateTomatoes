import { request } from "./base";
import { ICloud, IKnowledge, ICloudGroup } from "../interfaces/index";

/**
 * Fetching cloud groups including clouds
 *
 * See: .../explorer/#!/CloudGroups:PUT
 *
 * @returns {ICloudGroup[]} cloudGroups - cloud groups
 */
export const fetchCloudGroups = () => {
  return request
    .get(`CloudGroups?filter={"include": ["clouds"]}`, {})
    .then((cloudGroups: ICloudGroup[]) => cloudGroups);
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
 * Fetching cloud by id including knowledge
 *
 * See: .../explorer/#!/Clouds/{id}:POST
 * @param {string} id - cloud id
 *
 * @returns {ICloud} cloud - cloud
 */
export const fetchCloud = (id: string) => {
  return request
    .get(`Clouds/${id}?filter={"include": ["knowledge"]}`, {})
    .then((cloud: ICloud) => <ICloud> cloud);
};

/**
 * Creating new cloud
 *
 * See: .../explorer/#!/CloudGroups/{id}/clouds:POST
 * @param {string} id - cloud id
 * @param {ICloud} cloud - cloud
 *
 * @returns {ICloud} cloud - cloud
 */
export const addNewCloud = (id: string, cloud: ICloud) => {
  return request
    .post(`CloudGroups/${id}/clouds`, cloud)
    .then((c: ICloud) => <ICloud> c);
};

/**
 * Creating new cloud group
 *
 * See: .../explorer/#!/CloudGroups/{id}/clouds:POST
 * @param {ICloudGroup} cloudGroup - cloud group
 *
 * @returns {ICloud} cloud - cloud
 */
export const addNewCloudGroup = (cloudGroup: ICloudGroup) => {
  return request
    .post(`CloudGroups`, cloudGroup)
    .then((c: ICloudGroup) => <ICloudGroup> c);
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
    .get(`Knowledges/${id}`, {})
    .then((knowledge: IKnowledge[]) => <IKnowledge> knowledge);
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
