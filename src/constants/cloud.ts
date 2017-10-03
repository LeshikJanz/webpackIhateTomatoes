import { dimensionMultiplier } from "modules/Cloud/components/JqueryCloud/constants";

export const DEFAULT_TAG_CLOUD_SETTINGS = {
  textFont: 'Raleway-Medium, Raleway, Cooper',
  textColour: '#337ab7',
  textHeight: 25,
  outlineMethod: 'block',
  outlineColour: '#acf',
  maxSpeed: 0.02,
  minBrightness: 0.2,
  depth: 0,
  pulsateTo: 0.6,
  initial: [0.2, -0.2],
  decel: 1,
  reverse: true,
  shadow: '#ccf',
  weight: false,
  imageScale: null,
  fadeIn: 10,
  radiusX: dimensionMultiplier,
  clickToFront: 600,
  noTagsMessage: false,
  minSpeed: 0.015
};