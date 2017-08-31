import { request } from "./base";
import {ISky} from "../interfaces/index";

/**
 * Create sky
 *
 * See: .../explorer/#!/Skies/:POST
 *
 * @param {ISky} sky - sky item
 *
 * @returns {ISky} sky - created sky
 */
export const createSky = (sky: ISky) => {
    return request
        .post(`Skies`, sky)
        .then((sky: ISky) => sky);
};