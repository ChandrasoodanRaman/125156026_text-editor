import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FontSelector from './components/FontSelector';
import VariantSelector from './components/VariantSelector';
import ItalicToggle from './components/ItalicToggle';
import TextEditor from './components/TextEditor';
import { getFonts } from './utils/fontUtils';
import { Fonts } from './types'; 
import { saveSettingsToLocalStorage, loadSettingsFromLocalStorage } from './utils/LocalStorageUtils';

const App: React.FC = () => {
  const [fonts, setFonts] = useState<Fonts>({});
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [fontVariant, setFontVariant] = useState('400');
  const [isItalic, setIsItalic] = useState(false);
  const [text, setText] = useState('Hello World');
  const [supportsItalic, setSupportsItalic] = useState(false);

  useEffect(() => {
    const fetchFonts = async () => {
      const fontData = await getFonts();
      setFonts(fontData);
    };
    fetchFonts();

    const { text: savedText, fontFamily: savedFontFamily, fontVariant: savedFontVariant, isItalic: savedIsItalic } = loadSettingsFromLocalStorage();

    setText(savedText);
    setFontFamily(savedFontFamily);
    setFontVariant(savedFontVariant);
    setIsItalic(savedIsItalic);

    const fontVariants = fonts[savedFontFamily] || {};
    const italicSupported = Object.keys(fontVariants).includes(`${savedFontVariant}italic`);

    setSupportsItalic(italicSupported);
  }, [fonts]);

  useEffect(() => {
    saveSettingsToLocalStorage(text, fontFamily, fontVariant, isItalic);
  }, [text, fontFamily, fontVariant, isItalic]);

  useEffect(() => {
    const fontVariants = fonts[fontFamily] || {};
    const italicSupported = Object.keys(fontVariants).includes(`${fontVariant}italic`);
    setSupportsItalic(italicSupported);
  }, [fontFamily, fontVariant, fonts]);

  const reset = () => {
    setText('Hello World');
    setFontFamily('Roboto');
    setFontVariant('400');
    setIsItalic(false);
  };

  return (
    <Container>
      <Controls>
        <label htmlFor="font-family">Font Family</label>
        <FontSelector
          id="font-family"
          fonts={fonts}
          selectedFont={fontFamily}
          setFont={setFontFamily}
        />

        <label htmlFor="font-variant">Font Variant</label>
        <VariantSelector
          id="font-variant"
          variants={fonts[fontFamily] || {}}
          selectedVariant={fontVariant}
          setVariant={setFontVariant}
        />

        <label htmlFor="italic-toggle">Italic</label>
        <ItalicToggle
          id="italic-toggle"
          isItalic={isItalic}
          setIsItalic={setIsItalic}
          supportsItalic={supportsItalic}
        />
      </Controls>
      <TextEditor
        text={text}
        setText={setText}
        fontFamily={fontFamily}
        fontVariant={fontVariant}
        isItalic={isItalic}
      />
      <Button onClick={reset}>Reset</Button>
      <Button>Save</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-right: 10px;
`;

export default App;
