import { request } from "./base";
import { IView } from "../interfaces/index";

/**
 * Updating or Creating view
 *
 * See: .../explorer/#!/Clouds/{id}:PUT
 * @param view {IView} - user view
 *
 * @returns {IView} view - view
 */
export const addView = (view: IView) =>
  request
    .put(`Views`, view)
    .then((v: IView) => <IView> v);