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

  // Fonction pour gérer la mise à jour de l'input texte
  const handleTextChange = (path: string, value: string) => {
    if (path === '#/properties/user/properties/a08') {
      setTextValue(value);
    }
  };

  //Fonction pour gérer la mise à jour du textarea
  const handleTextAreaChange = (path: string, value: string) => {
    if (path === '#/properties/user/properties/a09') {
      setTextAreaValue(value);
    }
  };

  // Fonction pour gérer la mise à jour des options enum
  const handleEnumChange = (path: string, value: string[]) => {
    if (path === '#/properties/item/properties/s01') {
      setEnumValue(value);
    }
  };

  // Fonction pour gérer la mise à jour du tableau des pays
  const handleArrayChange = (path: string, value: { country: string; percent: number }[]) => {
    if (path === '#/properties/item/properties/i01') {
      setCountriesValue(value);
    }
  };

  return (
    <div className="container">
      <h2>{schema.properties.user.title}</h2>

      <div className="render-container">
        <RenderText
          label="Your Name"
          value={textValue} 
          handleChange={handleTextChange} 
          schema={schema.properties.user.properties.a08}
          uischema={{
            type: "Control",
            scope: "#/properties/user/properties/a08",
          }}
          errors=""
          data={textValue}
          rootSchema={schema}
          id="user-name"
          enabled={true}
          visible={true}
          path="#/properties/user/properties/a08"
        />
      </div>

      <div className="render-container">
        <RenderTextArea
          label="Your Skills"
          value={textAreaValue} 
          handleChange={handleTextAreaChange} 
          schema={schema.properties.user.properties.a09}
          uischema={{
            type: "Control",
            scope: "#/properties/user/properties/a09",
          }}
          errors=""
          data={textAreaValue}
          rootSchema={schema}
          id="user-skills"
          enabled={true}
          visible={true}
          path="#/properties/user/properties/a09"
        />
      </div>

      <div className="render-container">
        <h2>{schema.properties.item.title}</h2>
        <RenderEnum
          label="Contract Provider"
          value={enumValue} 
          handleChange={handleEnumChange} 
          schema={schema.properties.item.properties.s01}
          uischema={{
            type: "Control",
            scope: "#/properties/item/properties/s01",
            options: { multi: true },
          }}
          errors=""
          data={enumValue}
          rootSchema={schema}
          id="contract-provider"
          enabled={true}
          visible={true}
          path="#/properties/item/properties/s01"
        />
      </div>

      <div className="render-container">
        <RenderArray
          label="Countries Worked"
          value={countriesValue} 
          handleChange={handleArrayChange}
          schema={schema.properties.item.properties.i01}
          uischema={{
            type: "Control",
            scope: "#/properties/item/properties/i01",
          }}
          errors=""
          data={countriesValue}
          rootSchema={schema}
          id="countries-worked"
          enabled={true}
          visible={true}
          path="#/properties/item/properties/i01"
        />
      </div>
    </div>
  );
};

export default App;
