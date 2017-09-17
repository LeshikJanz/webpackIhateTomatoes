import bold from '../components/toolbarToggles/bold';
import italic from '../components/toolbarToggles/italic';
import strikeThrough from '../components/toolbarToggles/strikethrough';
import link from '../components/toolbarToggles/link';
import ul from '../components/toolbarToggles/ul';
import ol from '../components/toolbarToggles/ol';
import bq from '../components/toolbarToggles/blockquote';
import code from '../components/toolbarToggles/code';
import { FontSizePicker } from '../components/toolbarToggles/fontSizePicker';
import { FontFamilyPicker } from '../components/toolbarToggles/fontFamilyPicker';
import { TextAlignPicker } from '../components/toolbarToggles/textAlignPicker';
import { Map } from 'immutable';

export const TOOLBAR_WIDTH = 530;
export const MODAL_PADDING = 0.15;

export const BLOCK_TYPES = [
  { type: "inline", label: "B", style: "BOLD", icon: bold },
  { type: "inline", label: "I", style: "ITALIC", icon: italic },
  { type: "inline", label: "S", style: "STRIKETHROUGH", icon: strikeThrough },
  { type: "custom", label: 'Font Size Picker', icon: FontSizePicker },
  { type: "custom", label: 'Font Family Picker', icon: FontFamilyPicker },
  { type: "entity", label: "Link", style: "link", entity: "LINK", icon: link },
  { type: "separator" },
  { type: "block", label: "UL", style: "unordered-list-item", icon: ul },
  { type: "block", label: "OL", style: "ordered-list-item", icon: ol },
  { type: "block", label: "QT", style: "blockquote", icon: bq },
  { type: "custom", label: 'Align', icon: TextAlignPicker },
  { type: "block", label: 'Code Block', style: 'code-block', icon: code },
];

export const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through'
  },
  'CODE': {
    textDecoration: 'none'
  },
  'TEXT_ALIGN_LEFT': {
    textAlign: 'left'
  },
  'TEXT_ALIGN_CENTER': {
    textAlign: 'center',
    textDecoration: 'line-through',
    color: 'red'
  },
  'TEXT_ALIGN_RIGHT': {
    textAlign: 'right'
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
  'FONT_SIZE_48': {
    fontSize: '48px'
  },
  'FONT_SIZE_72': {
    fontSize: '72px'
  },
  'FONT_FAMILY_Arial': {
    fontFamily: 'Arial'
  },
  'FONT_FAMILY_Cooper_Light': {
    fontFamily: 'Cooper',
  },
  'FONT_FAMILY_Cooper_Medium': {
    fontFamily: 'Cooper-Medium'
  },
  'FONT_FAMILY_Cooper_Bold': {
    fontFamily: 'Cooper-Bold'
  },
  'FONT_FAMILY_Serif': {
    fontFamily: 'Serif',
  },
  'FONT_FAMILY_Serif_Medium': {
    fontFamily: 'Serif-Medium'
  },
  'FONT_FAMILY_Serif_Bold': {
    fontFamily: 'Serif-Bold'
  },
  'FONT_FAMILY_Raleway': {
    fontFamily: 'Raleway',
  },
  'FONT_FAMILY_Raleway_Medium': {
    fontFamily: 'Raleway-Medium'
  },
  'FONT_FAMILY_Raleway_Bold': {
    fontFamily: 'Raleway-Bold'
  },
};

export const blockRenderMap = Map({
  'section-left': {
    element: 'section'
  },
  'section-center': {
    element: 'section'
  },
  'section-right': {
    element: 'section'
  },
});