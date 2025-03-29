// src/components/RenderEnum.tsx
import React from 'react';
import { ControlProps } from '@jsonforms/core';

interface ExtendedControlProps extends ControlProps {
  label: string; 
  value: any;
  handleChange: (path: string, value: any) => void;
  type?: string;
}

const RenderEnum: React.FC<ExtendedControlProps> = ({ data, handleChange, path, schema }) => {
  // Valeur par défaut si data est undefined
  const selectedValues = data || [];

  // Vérification que le schéma contient bien une énumération dans `items`
  const enumOptions =
    schema?.items &&
    !Array.isArray(schema.items) &&
    schema.items.enum 
      ? schema.items.enum
      : undefined;

  if (!enumOptions) {
    console.error('Schema items.enum is not defined.');
    return <div>Error: Invalid schema format. Enum is missing in items.</div>;
  }

  return (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2">{schema.title}</label>
      <div className="text-sm text-gray-600 mb-2">{schema.description}</div>
      <select
        multiple
        value={selectedValues}
        onChange={(e) =>
          handleChange(path, Array.from(e.target.selectedOptions, (option) => option.value))
        }
        className="p-2 border rounded"
      >
        {enumOptions.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RenderEnum;
