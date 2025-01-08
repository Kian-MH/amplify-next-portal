import { RJSFSchema } from "@rjsf/utils";

const sizeMappingSchema: RJSFSchema = {
  "properties": {
    "name": {
      "type": "string"
    },
    "entityGroup": {
      "type": "string"
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
  }
};

export default sizeMappingSchema;