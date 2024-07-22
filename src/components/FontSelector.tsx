import React from 'react';
import { Fonts } from '../types'; 

interface FontSelectorProps {
  id: string; 
  fonts: Fonts;
  selectedFont: string;
  setFont: (font: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ id, fonts, selectedFont, setFont }) => {
  return (
    <select
      id={id} 
      value={selectedFont}
      onChange={(e) => setFont(e.target.value)}
    >
      {Object.keys(fonts).map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
