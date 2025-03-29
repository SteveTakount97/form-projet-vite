import React from 'react';
import { ControlProps } from '@jsonforms/core';

interface ExtendedControlProps extends ControlProps {
  label: string;
  value: any;
  handleChange: (path: string, value: any) => void;
  type?: string;
}

const RenderArray: React.FC<ExtendedControlProps> = ({ data, handleChange, path, schema, rootSchema }) => {
  const countries = data || [];
  const availableCountries = rootSchema.definitions?.countries.enum || [];

  // Met à jour le pourcentage
  const handlePercentageChange = (index: number, value: number) => {
    const newCountries = [...countries];
    newCountries[index].percent = value;
    handleChange(path, newCountries);
  };

  // Met à jour le pays sélectionné
  const handleCountryChange = (index: number, value: string) => {
    const newCountries = [...countries];
    newCountries[index].country = value;
    handleChange(path, newCountries);
  };

  return (
    <div className="table-container">
      <div className="flex items-start mb-4">
        <div className="w-1/3">
          <label>{schema.title}</label>
        </div>
        <div className="w-2/3">
          <div className="text-sm text-gray-500">{schema.description}</div>
        </div>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 border-b">Country</th>
              <th className="text-left p-2 border-b">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country: { country: string; percent: number }, index: number) => (
              <tr key={index} className="table-row">
                {/*Sélection du pays */}
                <td className="country-cell p-2 border-b">
                  <select
                    value={country.country}
                    onChange={(e) => handleCountryChange(index, e.target.value)}
                    className="input-field w-full border rounded-md p-2"
                  >
                    <option value="" disabled>
                      -- Select Country --
                    </option>
                    {availableCountries.map((countryOption: string) => (
                      <option key={countryOption} value={countryOption}>
                        {countryOption}
                      </option>
                    ))}
                  </select>
                </td>

                {/*Saisie du pourcentage */}
                <td className="percentage-cell p-2 border-b">
                  <input
                    type="number"
                    value={country.percent}
                    onChange={(e) => handlePercentageChange(index, Number(e.target.value))}
                    className="input-field w-full border rounded-md p-2"
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
