import { request } from "./base";
import { ICloud, IKnowledge } from "../interfaces/index";

export const fetchCloud = (id: string, params: any = {}) => {
  return request
    .get(`Clouds/${id}/knowledge`, params)
    .then((content: ICloud[]) => content.map( ( c ) => <ICloud> c) );
};

export const fetchKnowledge = (id: string, params: any = {}) => {
  return request
    .get(`Knowledges/${id}`, params)
    .then((content: IKnowledge[]) => content.map( ( c ) => <IKnowledge> c) );
};

export const addNewKnowledge = (params: any = {}) => {
  return request
    .post(`Knowledges`, params)
    .then((c: IKnowledge) => <IKnowledge> c);
};

export const updateKnowledgeById = (id: any, params: any = {}) => {
  return request
    .put(`Knowledges/${id}`, params)
    .then((c: IKnowledge) => <IKnowledge> c);
};

