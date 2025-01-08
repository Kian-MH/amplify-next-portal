import { RJSFSchema } from "@rjsf/utils";

const sizeMappingSchema: RJSFSchema = {
  "properties": {
    "group": {
      "type": "string"
    },
    "entities": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "string",
        "enum": [
          "mhnl",
          "mhno",
          "mhnr",
          "mhbe"
        ]
      }
    }
  }
};

export default sizeMappingSchema;