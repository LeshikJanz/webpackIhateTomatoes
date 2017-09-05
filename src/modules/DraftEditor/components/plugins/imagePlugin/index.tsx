import ImageBlock from "./blockComponent";
import BlockButton from "./BlockButton";
import { MegadraftIcons } from "megadraft";

export default {
  // Friendly plugin name
  title: "Image",
  // A unique plugin name used to identify the plugin and its blocks
  type: "image",
  // React component to be rendered in the block sidebar
  buttonComponent: BlockButton,
  // React component for rendering the content block
  blockComponent: ImageBlock,
  options: {
    defaultDisplay: "center",
    displayOptions: [
      { "key": "center", "icon": MegadraftIcons.MediaMediumIcon, "label": "CENTER" },
      { "key": "left", "icon": MegadraftIcons.MediaSmallIcon, "label": "LEFT" }]
  }
};
