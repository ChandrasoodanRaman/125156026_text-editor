import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button<{ isActive: boolean }>`
  background-color: ${props => (props.isActive ? 'lightgray' : 'white')};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

 
`;

interface ItalicToggleProps {
  id: string;
  isItalic: boolean;
  setIsItalic: (italic: boolean) => void;
  supportsItalic: boolean;
}

const ItalicToggle: React.FC<ItalicToggleProps> = ({ id, isItalic, setIsItalic, supportsItalic }) => {
  return (
    <ToggleButton
      id={id}
      isActive={isItalic}
      onClick={() => {
        if (supportsItalic) {
          setIsItalic(!isItalic);
        }
      }}
      disabled={!supportsItalic}
    >
      {isItalic ? 'Italic On' : 'Italic Off'}
    </ToggleButton>
  );
};

export default ItalicToggle;
