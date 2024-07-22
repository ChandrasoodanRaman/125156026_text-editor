import React from 'react';
import styled from 'styled-components';

interface TextEditorProps {
    text: string;
    setText: (text: string) => void;
    fontFamily: string;
    fontVariant: string;
    isItalic: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ text, setText, fontFamily, fontVariant, isItalic }) => {
    return (
        <Editor
            style={{
                fontFamily,
                fontWeight: fontVariant,
                fontStyle: isItalic ? 'italic' : 'normal'
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
};

export default TextEditor;

const Editor = styled.textarea`
    width: 100%;
    height: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
