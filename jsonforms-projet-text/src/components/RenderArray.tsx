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
    <div className="table-container">
      {/* Titre et description */}
      <div className="flex items-start mb-4">
        <div className="w-1/3">
          <label>{schema.title}</label>
        </div>
        <div className="w-2/3">
          <div className="text-sm text-gray-500">{schema.description}</div>
        </div>
      </div>
  
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th>Country</th>
              <th >Percentage</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country: { country: string; percent: number }, index: number) => (
              <tr key={index} className="table-row">
                <td className="country-cell">{country.country}</td>
                <td className="percentage-cell">
                  <input
                    type="number"
                    value={country.percent}
                    onChange={(e) => handlePercentageChange(index, Number(e.target.value))}
                    className="input-field"
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
