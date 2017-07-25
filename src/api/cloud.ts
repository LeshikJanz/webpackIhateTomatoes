import { request } from "./base";
import { ICloud, IKnowledge, ICloudGroup } from "../interfaces/index";

/**
 * Fetching cloud groups including clouds
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

export const fetchClouds = (params: any = {}) => {
  return request
    .get(`Clouds`, params)
    .then((clouds: ICloud[]) => clouds);
};

/**
 * Fetching cloud by id including knowledge
 *
 * @param {string} id - cloud id
 *
 * @returns {ICloud} cloud - cloud
 */
export const fetchCloud = (id: string) => {
  return request
    .get(`Clouds/${id}?filter={"include": ["knowledge"]}`, {})
    .then((cloud: ICloud) => <ICloud> cloud);
};

export const addNewCloud = (id: string, params: any = {}) => {
  return request
    .post(`CloudGroups/${id}/clouds`, params)
    .then((c: ICloud) => <ICloud> c);
};

export const addNewCloudGroup = (params: any = {}) => {
  return request
    .post(`CloudGroups`, params)
    .then((c: ICloudGroup) => <ICloudGroup> c);
};

export const fetchKnowledge = (id: string, params: any = {}) => {
  return request
    .get(`Knowledges/${id}`, params)
    .then((content: IKnowledge[]) => content.map((c) => <IKnowledge> c));
};

export const addNewKnowledge = (params: any = {}) => {
  return request
    .post(`Clouds/${params.cloudId}/Knowledge`, params)
    .then((c: IKnowledge) => <IKnowledge> c);
};

export const updateKnowledgeById = (id: any, params: any = {}) => {
  return request
    .put(`Knowledges/${id}`, params)
    .then((c: IKnowledge) => <IKnowledge> c);
};

