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
    <div className="form-group">
      {/* Title and Description */}
      <div>
        <div>
          <label>{schema.title}</label>
        </div>
        <div>
          <div>{schema.description}</div>
        </div>
      </div>
      <textarea
        value={data || ''}
        onChange={(e) => handleChange(path, e.target.value)}
      />
    </div>
  );
};

export default RenderTextArea;
