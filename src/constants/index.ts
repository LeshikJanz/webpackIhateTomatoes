import { ICloud } from "interfaces";
export const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqw7mxpr9/upload';
export const CLOUDINARY_UPLOAD_PRESET = 'oo5ejtrk';

export const DEFAULT_CLOUD: ICloud = {
  name: 'Main',
  goal: "This is your first cloud. Let's try all Bighead functionality from here!",
  accountId: null
};

export const DEFAULT_CLOUD_ID: string = "59ad3330ea973508092ef84c";
export const DEFAULT_PROFILE_IMG = 'assets/img/default-user-icon.png';

// This variable hide beta functionality (not included to current release)
export const IS_BETA_ENABLED = false;

export const IMGUR_URL = 'https://api.imgur.com/3/image';
export const IMGUR_CLIENT_ID = '25a73dd4a79fdb9';

export const MODAL_TYPES = {
  successfulRegistration: 'Successful Registration',
  confirm: 'Confirm',
  auth: 'Auth',
  editor: 'Editor',
  cloudAdd: 'CloudAdd',
  knowledgeCreate: 'KnowledgeCreate',
  notAuthorized: 'NotAuthorized',
  settings: 'Settings'
};