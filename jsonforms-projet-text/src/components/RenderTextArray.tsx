// src/components/RenderTextArea.tsx
import React from 'react';
import { ControlProps } from '@jsonforms/core';


interface ExtendedControlProps extends ControlProps {
    label: string; 
    value: any;
    handleChange: (path: string, value: any) => void;
    type?: string;
  }

const RenderTextArea: React.FC<ExtendedControlProps> = ({ data, handleChange, path, schema }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2">{schema.title}</label>
      <div className="text-sm text-black mb-2">{schema.description}</div>
      <textarea
        value={data || ''}
        onChange={(e) => handleChange(path, e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-20"
      />
    </div>
  );
};

export default RenderTextArea;
