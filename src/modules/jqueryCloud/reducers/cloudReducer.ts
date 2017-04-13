import { createReducer } from 'utils/createReducer';
import { addTag, fetchCloudDone, fetchCloudError } from "../../actions";
import { IKnowledge } from "../../../interfaces/index";

const initialState: any = [];
// const initialState: any = [
//   {
//     source: "http://www.google.com",
//     value: "Meat"
//   },
//   {
//     source: "http://www.google.com",
//     value: "Fish"
//   },
//   {
//     source: "http://www.google.com",
//     value: "Google"
//   },
//   {
//     source: "http://www.google.com",
//     value: "Javascript"
//   },
//   {
//     source: "http://www.google.com",
//     value: "Typescript"
//   }
// ];

export default createReducer({
  [addTag]: (state: any, payload: any) => ([
    ...state,
    payload
  ]),
  [fetchCloudDone]: (state: any, payload: IKnowledge[]) => ([
    ...state,
    ...payload
]),
  [fetchCloudError]: (state: any, error: Error) => ([
    ...state,
    error.message
]),
}, initialState);
