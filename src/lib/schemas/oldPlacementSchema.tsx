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
    "adTypes": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "string",
        "enum": [
          "banner",
          "native",
          "outstream",
          "video"
        ]
      }
    },
    "sizeMapping": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "array",
          "minItems": 2,
          "maxItems": 2,
          "items": {
            "type": "integer"
          }
        }
      }
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
        "excludeBidders": {
          "$ref": "#/definitions/bidders"
        },
        "adTypes": {
          "$ref": "#/definitions/adTypes"
        },
        "sizeMapping": {
          "$ref": "#/definitions/sizeMapping"
        }
      }/* bidder*/,
      "additionalProperties": {
        "type": "object"/* bidderProperty (ex. invCOde)*/,
        "additionalProperties": {
          "type": "object"/* adType*/,
          "additionalProperties": {
            "type": "object"/* viewport*/,
            "additionalProperties": {
              "oneOf": [
                {
                  "type": "string"
                },
                {
                  "type": "integer"
                }
              ]
            }
          }
        }
      }
    }
  }
};

export default placementSchema;