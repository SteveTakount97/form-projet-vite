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
    <div className="form-group">
      {/* Title and Description */}
      <div className="flex items-start mb-4">
        <div className="w-1/3">
          <label>{schema.title}</label>
        </div>
        <div className="w-2/3">
          <div>{schema.description}</div>
        </div>
      </div>
      
      <select
        multiple
        value={selectedValues}
        onChange={(e) =>
          handleChange(path, Array.from(e.target.selectedOptions, (option) => option.value))
        }
      
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
