import * as React from "react";
import '../../styles/react-select-picker.scss';
const Select = require('react-select');

const options = [
  { value: 'FONT_SIZE_12', label: '12' },
  { value: 'FONT_SIZE_16', label: '16' },
  { value: 'FONT_SIZE_20', label: '20' },
  { value: 'FONT_SIZE_24', label: '24' },
  { value: 'FONT_SIZE_32', label: '32' },
  { value: 'FONT_SIZE_48', label: '48' },
  { value: 'FONT_SIZE_72', label: '72' }
];

export const FontSizePicker = ({ active, toggleInlineStyle }) => {
  const selectedFont = active.find(a => options.find(({ value }) => value == a)) || 'FONT_SIZE_16';

  return (
    <div className="fontPicker-container">
      <Select
        name="form-field-name"
        value={selectedFont}
        options={options}
        searchable={false}
        placeholder=""
        onCloseResetsInput={false}
        onChange={(e) => toggleInlineStyle(e.value)}
      />
    </div>
  );
}