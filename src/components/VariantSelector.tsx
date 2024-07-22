import React from 'react';

interface VariantSelectorProps {
  id: string;
  variants: { [key: string]: string };
  selectedVariant: string;
  setVariant: (variant: string) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ id, variants, selectedVariant, setVariant }) => {
  return (
    <select id={id} value={selectedVariant} onChange={(e) => setVariant(e.target.value)}>
      {Object.keys(variants).map((variant) => (
        <option key={variant} value={variant}>
          {variant}
        </option>
      ))}
    </select>
  );
};

export default VariantSelector;
