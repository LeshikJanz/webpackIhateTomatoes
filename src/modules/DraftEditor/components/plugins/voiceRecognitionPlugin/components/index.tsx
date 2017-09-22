import { BlockButton } from "./BlockButton";
import { MegadraftIcons } from "megadraft";
import { VoiceBlock } from "./voiceBlock";

export default {
  // Friendly plugin name
  title: "VoiceRecognition",
  // A unique plugin name used to identify the plugin and its blocks
  type: "voiceRecognition",
  // React component to be rendered in the block sidebar
  buttonComponent: BlockButton,
  // React component for rendering the content block
  blockComponent: VoiceBlock,
  options: {
    defaultDisplay: "big",
    displayOptions: [
      { "key": "small", "icon": MegadraftIcons.MediaSmallIcon, "label": "SMALL" },
      { "key": "medium", "icon": MegadraftIcons.MediaMediumIcon, "label": "MEDIUM" },
      { "key": "big", "icon": MegadraftIcons.MediaBigIcon, "label": "BIG" }
    ]
  }
};
