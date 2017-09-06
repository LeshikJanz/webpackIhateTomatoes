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
    defaultDisplay: "medium",
    displayOptions: [
      { "key": "small", "icon": MegadraftIcons.MediaSmallIcon, "label": "SMALL" },
      { "key": "medium", "icon": MegadraftIcons.MediaMediumIcon, "label": "MEDIUM" },
      { "key": "big", "icon": MegadraftIcons.MediaBigIcon, "label": "BIG" }
    ]
  }
};
