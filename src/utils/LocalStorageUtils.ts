

export const saveSettingsToLocalStorage = (text: string, fontFamily: string, fontVariant: string, isItalic: boolean) => {
    localStorage.setItem('text', text);
    localStorage.setItem('fontFamily', fontFamily);
    localStorage.setItem('fontVariant', fontVariant);
    localStorage.setItem('isItalic', JSON.stringify(isItalic));
  };
  
  export const loadSettingsFromLocalStorage = () => {
    const text = localStorage.getItem('text') || '';
    const fontFamily = localStorage.getItem('fontFamily') || 'Roboto';
    const fontVariant = localStorage.getItem('fontVariant') || '400';
    const isItalic = JSON.parse(localStorage.getItem('isItalic') || 'false');
    
    return { text, fontFamily, fontVariant, isItalic };
  };
  