import { createAction } from "utils/createAction";

export const createAccountInit = createAction('CREATE_ACCOOUNT_INIT');
export const createAccountDone = createAction('CREATE_ACCOUNT_DONE');
export const createAccountError = createAction('CREATE_ACCOUNT_ERROR');

export const avatarUploadInit = createAction('AVATAR_UPLOAD_INIT');
export const avatarUploadDone = createAction('AVATAR_UPLOAD_DONE');
export const avatarUploadError = createAction('AVATAR_UPLOAD_ERROR');

