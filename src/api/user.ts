import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from "../modules/DraftEditor/constants/index";
import { request } from "./base";

/**
 * Uploading image to cloudinary.com
 *
 * @returns {any} res - cloudinary response
 * @param file
 */
export const uploadImage = ( file: File ) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  return request
    .upload(CLOUDINARY_URL, file, formData)
    .then(( res ) => res);
};
