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

  // Liste des pays disponibles depuis le schema
  const countryOptions = rootSchema.definitions?.countries.enum || [];

  // Ajouter un pays
  const handleAddCountry = () => {
    const newCountry = {
      country: countryOptions[0] || '', // Sélectionne le premier pays par défaut
      percent: 0,
    };
    handleChange(path, [...countries, newCountry]);
  };

  // Supprimer un pays
  const handleRemoveCountry = (index: number) => {
    const newCountries = [...countries];
    newCountries.splice(index, 1); // Supprime le pays sélectionné
    handleChange(path, newCountries);
  };

  // Changer la valeur du pays sélectionné
  const handleCountryChange = (index: number, value: string) => {
    const newCountries = [...countries];
    newCountries[index].country = value;
    handleChange(path, newCountries);
  };

  // Changer le pourcentage
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
              <th className="border px-4 py-2">Country</th>
              <th className="border px-4 py-2">Percentage</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country: { country: string; percent: number }, index: number) => (
              <tr key={index} className="table-row">
                {/* 🔽 Sélection du pays */}
                <td className="border px-4 py-2">
                  <select
                    value={country.country}
                    onChange={(e) => handleCountryChange(index, e.target.value)}
                    className="input-field"
                  >
                    {countryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                {/* Saisie du pourcentage */}
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={country.percent}
                    onChange={(e) => handlePercentageChange(index, Number(e.target.value))}
                    className="input-field"
                    min={0}
                    max={100}
                  />
                </td>
                {/* Supprimer le pays */}
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleRemoveCountry(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Bouton pour ajouter un pays */}
      <div className="mt-4">
        <button
          onClick={handleAddCountry}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Add Country
        </button>
      </div>
    </div>
  );
};

export default RenderArray;
