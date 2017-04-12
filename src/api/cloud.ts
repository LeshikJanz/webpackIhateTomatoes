import { request } from "./base";
import { ICloud, IKnowledge } from "../interfaces/index";

export const fetchClouds = (params: any = {}) => {
  return request
    .get('Clouds', params)
    .then((content: ICloud[]) => content.map( ( c ) => <ICloud> c) );
};

export const fetchKnowledges = (params: any = {}) => {
  return request
    .get('Knowledges', params)
    .then((content: IKnowledge[]) => content.map( ( c ) => <IKnowledge> c) );
};
