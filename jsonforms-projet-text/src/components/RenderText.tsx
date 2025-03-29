// src/components/RenderText.tsx
import React from 'react';
import { ControlProps } from '@jsonforms/core';

interface ExtendedControlProps extends ControlProps {
  label: string; 
  value: any;
  handleChange: (path: string, value: any) => void;
  type?: string;
}

const RenderText: React.FC<ExtendedControlProps> = ({label, data, handleChange, path, schema }) => {
  return (
    <div className="form-group">
      <div>
      <div>
          <label>{label}</label>
        </div>
        <div className="w-2/3">
          <div>{schema.description}</div>
        </div>
      </div>

      <input
        type="text"
        value={data || ''}
        onChange={(e) => handleChange(path, e.target.value)}

      />
    </div>
  );
};

export default RenderText;
