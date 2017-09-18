import { MegadraftIcons } from "megadraft";
import { BlockButton } from "./BlockButton";
import VideoBlock from "../containers";

export default {
  // Friendly plugin name
  title: "Video",
  // A unique plugin name used to identify the plugin and its blocks
  type: "video",
  // React component to be rendered in the block sidebar
  buttonComponent: BlockButton,
  // React component for rendering the content block
  blockComponent: VideoBlock,
  options: {
    defaultDisplay: "medium",
    displayOptions: [
      { "key": "small", "icon": MegadraftIcons.MediaSmallIcon, "label": "SMALL" },
      { "key": "medium", "icon": MegadraftIcons.MediaMediumIcon, "label": "MEDIUM" },
      { "key": "big", "icon": MegadraftIcons.MediaBigIcon, "label": "BIG" }
    ]
  }
};
