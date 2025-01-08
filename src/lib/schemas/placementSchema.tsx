import { RJSFSchema } from "@rjsf/utils";

const placementSchema: RJSFSchema = {
  "definitions": {
    "bidders": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "string",
        "enum": [
          "appnexus",
          "rubicon",
          "pubmatic",
          "teads"
        ]
      }
    },
    "bidderConfig": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          /* bidder name */
          "name": {
            "type": "string"
          },
          "properties": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                /* TODO: these are variables such as 'invCode' from Appnexus - should make predefined schemas for each bidder */
                "property": {
                  "type": "string"
                },
                "values": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "adType": {
                        "type": "string"
                      },
                      "viewport": {
                        "type": "integer"
                      },
                      "value": {
                        "$ref": "#/definitions/identifier"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "sizeMapping": {
      "type": "string"
      // Adding dropdown values (enum) dynamically after exporting
    },
    "identifier": {
      "anyOf": [
        {
          // Adding dropdown values (enum) dynamically after exporting
          "title": "identifier",
          "type": "string"
        },
        {
          "title": "freeform",
          // integer needs to be first to properly parse as a number
          "type": ["integer", "string"]
        }
      ]
    }
  },
  "properties": {
    "id": {
      "type": "string"
    },
    "format": {
      "type": "string"
    },
    "slot": {
      "type": "string"
    },
    "sizeMapping": {
      "$ref": "#/definitions/sizeMapping"
    },
    "options": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "prebid": {
      "type": "object",
      "properties": {
        "bidders": {
          "$ref": "#/definitions/bidders"
        },
        "sizeMapping": {
          "$ref": "#/definitions/sizeMapping"
        },
        "bidderConfigs": {
          "$ref": "#/definitions/bidderConfig"
        }
      }
    }
  }
};

export default placementSchema;