import bold from '../components/icons/bold';
import italic from '../components/icons/italic';
import link from '../components/icons/link';
import ul from '../components/icons/ul';
import ol from '../components/icons/ol';
import bq from '../components/icons/blockquote';
import code from '../components/icons/code';
import h1 from '../components/icons/h1';
import h2 from '../components/icons/h2';
import h3 from '../components/icons/h3';
import h4 from '../components/icons/h4';
import h5 from '../components/icons/h5';
import h6 from '../components/icons/h6';

export const BLOCK_TYPES = [
  { type: "inline", label: "B", style: "BOLD", icon: bold },
  { type: "inline", label: "I", style: "ITALIC", icon: italic },
  { type: "entity", label: "Link", style: "link", entity: "LINK", icon: link },
  { type: "separator" },
  { type: "block", label: 'H1', style: 'header-one', icon: h1 },
  { type: "block", label: 'H2', style: 'header-two', icon: h2 },
  { type: "block", label: 'H3', style: 'header-three', icon: h3 },
  { type: "block", label: 'H4', style: 'header-four', icon: h4 },
  { type: "block", label: 'H5', style: 'header-five', icon: h5 },
  { type: "block", label: 'H6', style: 'header-six', icon: h6 },
  { type: "separator" },
  { type: "block", label: "UL", style: "unordered-list-item", icon: ul },
  { type: "block", label: "OL", style: "ordered-list-item", icon: ol },
  { type: "block", label: "QT", style: "blockquote", icon: bq },
  { type: "block", label: 'Code Block', style: 'code-block', icon: code },
];