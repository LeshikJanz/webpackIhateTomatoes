import bold from '../components/toolbarToggles/bold';
import italic from '../components/toolbarToggles/italic';
import link from '../components/toolbarToggles/link';
import ul from '../components/toolbarToggles/ul';
import ol from '../components/toolbarToggles/ol';
import bq from '../components/toolbarToggles/blockquote';
import code from '../components/toolbarToggles/code';
import { FontPicker } from '../components/toolbarToggles/fontPicker';

export const BLOCK_TYPES = [
  { type: "inline", label: "B", style: "BOLD", icon: bold },
  { type: "inline", label: "I", style: "ITALIC", icon: italic },
  { type: "custom", label: 'Font Picker', icon: FontPicker },
  { type: "entity", label: "Link", style: "link", entity: "LINK", icon: link },
  { type: "separator" },
  { type: "block", label: "UL", style: "unordered-list-item", icon: ul },
  { type: "block", label: "OL", style: "ordered-list-item", icon: ol },
  { type: "block", label: "QT", style: "blockquote", icon: bq },
  { type: "block", label: 'Code Block', style: 'code-block', icon: code },
];

export const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
    color: 'red'
  },
  'FONT_SIZE_8': {
    fontSize: '8px'
  },
  'FONT_SIZE_12': {
    fontSize: '12px'
  },
  'FONT_SIZE_16': {
    fontSize: '16px'
  },
  'FONT_SIZE_20': {
    fontSize: '20px'
  },
  'FONT_SIZE_24': {
    fontSize: '24px'
  },
  'FONT_SIZE_32': {
    fontSize: '32px'
  },
  red: {
    color: 'rgba(255, 0, 0, 1.0)',
  },
  orange: {
    color: 'rgba(255, 127, 0, 1.0)',
  },
  yellow: {
    color: 'rgba(180, 180, 0, 1.0)',
  },
  green: {
    color: 'rgba(0, 180, 0, 1.0)',
  },
  blue: {
    color: 'rgba(0, 0, 255, 1.0)',
  },
  indigo: {
    color: 'rgba(75, 0, 130, 1.0)',
  },
  violet: {
    color: 'rgba(127, 0, 255, 1.0)',
  },
};