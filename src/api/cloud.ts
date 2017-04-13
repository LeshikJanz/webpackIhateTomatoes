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
