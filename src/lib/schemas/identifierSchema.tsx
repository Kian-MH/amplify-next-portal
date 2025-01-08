import { RJSFSchema } from "@rjsf/utils";

const sizeMappingSchema: RJSFSchema = {
  "properties": {
    "entityGroup": {
      // Adding dropdown values (enum) dynamically after exporting
      "type": "string"
    },
    "value": {
      "type": "string",
      "examples": [
        "ad_{format}-{slot}"
      ]
    }
  }
};

export default sizeMappingSchema;