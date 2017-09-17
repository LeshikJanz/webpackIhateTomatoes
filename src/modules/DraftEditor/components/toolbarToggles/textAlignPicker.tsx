import * as React from "react";
import '../../styles/react-select-picker.scss';
import { AlignLeft } from "./alignLeft";
import { AlignCenter } from "./alignCenter";
import { AlignRight } from "./alignRight";
const Select = require('react-select');

const options = [
  { value: 'section-left', label: (<AlignLeft/>) },
  { value: 'section-center', label: ( <AlignCenter/> ) },
  { value: 'section-right', label: (<AlignRight/>) },
];

export const TextAlignPicker = ({ toggleBlockStyle, editorState }) => {
  const selection = editorState.getSelection();
  const currentStyle = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const selectedAlign = options.find(({ value }) => value === currentStyle) || 'section-left';

  return (
    <div className="picker-container align-picker">
      <Select
        name="form-field-name"
        value={selectedAlign}
        options={options}
        searchable={false}
        placeholder=""
        onCloseResetsInput={false}
        onChange={(e) => toggleBlockStyle(e.value)}
      />
    </div>
  );
}