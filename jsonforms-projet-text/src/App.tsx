// src/App.tsx
import React, { useState } from 'react';
import RenderEnum from './components/RenderEnum';
import RenderText from './components/RenderText';
import RenderTextArea from './components/RenderTextArray';
import RenderArray from './components/RenderArray';
import { schema } from './data/schema';
import './App.css';

const App: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [enumValue, setEnumValue] = useState<string[]>([]);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [countriesValue, setCountriesValue] = useState([
    { country: 'USA', percent: 70 },
    { country: 'France', percent: 20 },
    { country: 'Canada', percent: 10 },
  ]);

  const handleEnumChange = (path: string, value: string[]) => {
    if (path === '#/properties/user/properties/a08') {
      setEnumValue(value);  
    } else {
    }
  };
  
  const handleArrayChange = (path: string, value: { country: string; percent: number }[]) => {
    if (path === '#/properties/user/properties/a08') {
      setCountriesValue(value);  
    } else {
    }
  };


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <RenderText
        label="Your Name"
        type="text"
        value={textValue}
        handleChange={setTextValue}
        schema={schema.properties.user.properties.a08}
        uischema={{
          type: "Control",
          scope: "#/properties/user/properties/a08",
        }}
        errors={''}
        data={undefined}
        rootSchema={schema}
        id={'user-name'}
        enabled={true}
        visible={true}
        path="#/properties/user/properties/a08"
      />
      <RenderTextArea
        label="Your Skills"
        type="textarea"
        value={textAreaValue}
        handleChange={setTextAreaValue}
        schema={schema.properties.user.properties.a09}
        uischema={{
          type: "Control",
          scope: "#/properties/user/properties/a09",
        }}
        errors={''}
        data={undefined}
        rootSchema={schema}
        id={'user-name'}
        enabled={true}
        visible={true}
        path="#/properties/user/properties/a08"
      />
      <RenderEnum
        label="Contract Provider"
        type="enum"
        value={enumValue}
        handleChange={handleEnumChange}  // Passer la fonction adaptée ici
        schema={schema.properties.item.properties.s01}
        uischema={{
          type: "Control",
          scope: "#/properties/item/properties/s01",
          options: { multi: true },
        }}
        errors={''}
        data={undefined}
        rootSchema={schema}
        id={'user-name'}
        enabled={true}
        visible={true}
        path="#/properties/user/properties/a08"
      />
      <RenderArray
        label="Countries Worked"
        type="countries"
        value={countriesValue}
        handleChange={handleArrayChange}
        schema={schema.properties.item.properties.i01}
        uischema={{
          type: "Control",
          scope: "#/properties/item/properties/i01",
        }}
        errors={''}
        data={undefined}
        rootSchema={schema}
        id={'user-name'}
        enabled={true}
        visible={true}
        path="#/properties/user/properties/a08"
      />

    </div>
  );
};

export default App;
