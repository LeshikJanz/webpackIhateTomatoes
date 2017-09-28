import { request } from "./base";
import { IUser, IUserSearchForm } from "../interfaces/index";

/**
 * Uploading image to cloudinary.com
 *
 * @returns {any} res - cloudinary response
 * @param file
 */
export const uploadImage = (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  return request
    .imgurUpload(formData)
    .then(res => res)
};

/**
 * Fetching users
 *
 * @param {string} filter - username filter
 *
 * @returns {IUser[]} users - users
 */
export const fetchUsers = (filter: IUserSearchForm) =>
  request
    .get("Accounts" + (filter ? `?filter={"where": {"username": {"regexp": "/${filter.searchValue}%2B/"}}}` : ''), {})
    .then((users: IUser[]) => users);

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

/**
 * Api for getting user
 *
 * See: .../explorer/#!/Accounts/{id}:GET
 *
 * @param {string} userId - user id
 * @returns {IUser} user - current user
 */
export const getUserById = (userId: string) => {
  return request
    .get(`Accounts/${userId}`, {})
    .then((user: IUser) => user);
};