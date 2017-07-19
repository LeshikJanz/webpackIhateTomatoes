import { request } from "./base";
import { ICloud, IKnowledge, ICloudGroup } from "../interfaces/index";

export const fetchCloudGroups = (params: any = {}) => {
  return request
    .get(`CloudGroups?filter={"include": ["clouds"]}`, params)
    .then((cloudGroups: ICloudGroup[]) => cloudGroups );
};

export const updateCloudById = (id: string, cloud: ICloud) => {
  return request
    .put(`Clouds/${id}`, cloud)
    .then((cloud: ICloud) => <ICloud> cloud);
};

export const fetchClouds = (params: any = {}) => {
  return request
    .get(`Clouds`, params)
    .then((clouds: ICloud[]) => clouds );
};

export const fetchCloud = (id: string, params: any = {}) => {
  return request
    .get(`Clouds/${id}?filter={"include": ["knowledge"]}`, params)
    .then((cloud: ICloud) => <ICloud> cloud);
};

export const addNewCloud = (params: any = {}) => {
  return request
    .post(`Clouds`, params)
    .then((c: ICloud) => <ICloud> c);
};

export const fetchKnowledge = (id: string, params: any = {}) => {
  return request
    .get(`Knowledges/${id}`, params)
    .then((content: IKnowledge[]) => content.map( ( c ) => <IKnowledge> c) );
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

