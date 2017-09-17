import * as React from "react";
import '../../styles/react-select-picker.scss';
const Select = require('react-select');

const options = [
  { value: 'section-left', label: 'Left' },
  { value: 'section-center', label: 'Center' },
  { value: 'section-right', label: 'Right' },
];

export const TextAlignPicker = ({ active, toggleBlockStyle }) => {
  const selectedAlign = active.find(a => options.find(({ value }) => value == a)) || 'section-left';

  return (
    <div className="fontPicker-container fontFamilyPicker">
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