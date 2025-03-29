
export const schema = {
  "type": "object",
  "definitions": {
    "countries": {
      "enum": [
        "?Unknown",
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom of Great Britain and Northern Ireland",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela, Bolivarian Republic of",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ]
    }
  },
  "properties": {
    "user": {
      "title": "My User",
      "type": "object",
      "properties": {
        "a08": {
          "title": "Name",
          "type": "string",
          "ve": 10
        },
        "a09": {
          "title": "description of your skills",
          "type": "string",
          "pt": 0,
          "ve": 10
        }
      }
    },
    "item": {
      "title": "My Infos",
      "type": "object",
      "properties": {
        "s01": {
          "title": "Who provides the contract?",
          "type": "array",
          "uniqueItems": true,
          "ve": 10,
          "items": {
            "type": "string",
            "enum": [
              "vendor",
              "integrator",
              "parent company",
              "subcontractor"
            ]
          }
        },
        "p02": {
          "title": "Are you currently student?",
          "description": "if you're currently student and also working for a company, check no",
          "type": "string",
          "enum": [
            "yes",
            "no",
            "?unknown"
          ],
          "ve": 10
        },
        "i01": {
          "title": "In which countries did you worked / How long (in percent)?",
          "type": "array",
          "description": "please be sure to include only countries where you effectively worked more than 7 days",
          "ve": 10,
          "totalPercentage": true,
          "items": {
            "type": "object",
            "properties": {
              "country": {
                "type": "string",
                "$ref": "#/definitions/countries"
              },
              "percent": {
                "type": "number"
              }
            }
          }
        }
      }
    }
  }
}

export const uischema = {
  "type": "Group",
  "elements": [
    {
      "type": "Group",
      "elements": [
        {
          "type": "Control",
          "scope": "#/properties/user/properties/a08"
        },
        {
          "type": "Control",
          "scope": "#/properties/user/properties/a09",
          "options": {
            "multi": true
          }
        }
      ],
      "label": "My User"
    },
    {
      "type": "Group",
      "elements": [
        {
          "type": "Control",
          "scope": "#/properties/item/properties/s01"
        },
        {
          "type": "Control",
          "scope": "#/properties/item/properties/i01"
        }
      ],
      "label": "Profile"
    }
  ]
}