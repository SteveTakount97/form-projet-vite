// src/components/RenderText.tsx
import React from 'react';
import { ControlProps } from '@jsonforms/core';

// Extension de ControlProps pour inclure le champ 'type'
interface ExtendedControlProps extends ControlProps {
  label: string; 
  value: any;
  handleChange: (path: string, value: any) => void;
  type?: string;
}
const RenderText: React.FC<ExtendedControlProps> = ({ data, handleChange, path, schema }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2">{schema.title}</label>
      <div className="text-sm text-gray-600 mb-2">{schema.description}</div>
      <input
        type="text"
        value={data || ''}
        onChange={(e) => handleChange(path, e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default RenderText;
