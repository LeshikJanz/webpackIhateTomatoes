import { ICloudGroup } from "interfaces/index";
export const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqw7mxpr9/upload';
export const CLOUDINARY_UPLOAD_PRESET = 'oo5ejtrk';

export const DEFAULT_CLOUD_GROUP: ICloudGroup = {
  name: "Main",
  title: "This is your default cloud group.",
  cloudOrders: []
};

// export const DEFAULT_CLOUD_ID: string = "597b7608971b4d071a77a8bf";  // working mac
export const DEFAULT_CLOUD_ID: string = "5984dbb13f0ed53320a94b01";  // laptop

export const DEFAULT_PROFILE_IMG = 'assets/img/default-user-icon.png';