import { request } from "./base";
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from "../constants/index";
import { IUser } from "../interfaces/index";

/**
 * Uploading image to cloudinary.com
 *
 * @returns {any} res - cloudinary response
 * @param file
 */
export const uploadImage = (file: File) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  return request
    .upload(CLOUDINARY_URL, file, formData)
    .then((res) => res);
};

/**
 * Fetching users
 *
 * @param {string} filter - username filter
 *
 * @returns {IUser[]} users - users
 */
export const fetchUsers = (filter: string) => {
  return request
    .get("Accounts" + (filter ? `?filter={"where": {"username": {"regexp": "/${filter}%2B/"}}}` : ''), {})
    .then((users: IUser[]) => users);
};

/**
 * Update user by id
 *
 * @param {IUser} user - username filter
 * @param {string} userId - updating user id
 *
 * @returns {IUser} user - user
 */
export const updateUserById = (userId: string, user: IUser) => {
  return request
    .patch(`Accounts/${userId}`, user)
    .then((user: IUser) => user);
};
