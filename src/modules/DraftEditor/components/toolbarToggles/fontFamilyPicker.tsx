import * as React from "react";
import '../../styles/react-select-picker.scss';
const Select = require('react-select');

const options = [
  { value: 'FONT_FAMILY_Arial', label: 'Arial' },
  { value: 'FONT_FAMILY_Cooper_Light', label: 'Cooper-Light' },
  { value: 'FONT_FAMILY_Cooper_Medium', label: 'Cooper-Medium' },
  { value: 'FONT_FAMILY_Cooper_Bold', label: 'Cooper-Bold' },
  { value: 'FONT_FAMILY_Raleway', label: 'Raleway' },
  { value: 'FONT_FAMILY_Raleway_Medium', label: 'Raleway-Medium' },
  { value: 'FONT_FAMILY_Raleway_Bold', label: 'Raleway-Bold' },
  { value: 'FONT_FAMILY_Serif', label: 'Serif' },
  { value: 'FONT_FAMILY_Serif_Medium', label: 'Serif-Medium' },
  { value: 'FONT_FAMILY_Serif_Bold', label: 'Serif-Bold' },
];

export const FontFamilyPicker = ({ active, toggleInlineStyle }) => {
  const selectedFont = active.find(a => options.find(({ value }) => value == a)) || 'FONT_FAMILY_Raleway_Medium';

  return (
    <div className="picker-container fontFamilyPicker">
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