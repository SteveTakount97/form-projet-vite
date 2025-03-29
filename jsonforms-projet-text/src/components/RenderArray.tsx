// src/components/RenderArray.tsx
import React from 'react';
import { ControlProps } from '@jsonforms/core';

interface ExtendedControlProps extends ControlProps {
  label: string; 
  value: any;
  handleChange: (path: string, value: any) => void;
  type?: string;
}

const RenderArray: React.FC<ExtendedControlProps> = ({ data, handleChange, path, schema }) => {
  const countries = data || [];

  const handlePercentageChange = (index: number, value: number) => {
    const newCountries = [...countries];
    newCountries[index].percent = value;
    handleChange(path, newCountries); 
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2">{schema.title}</label>
      <div className="text-sm text-gray-600 mb-2">{schema.description}</div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country: { country: string; percent: number }, index: number) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{country.country}</td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    value={country.percent}
                    onChange={(e) => handlePercentageChange(index, Number(e.target.value))}
                    className="px-2 py-1 border rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenderArray;
