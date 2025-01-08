import { UiSchema } from "@rjsf/utils";

const uiSchema: UiSchema = {
  "ui:globalOptions": {
    "orderable": false,
    // "label": false
  },
  "id": {
    "ui:label": true
  },
  "format": {
    "ui:label": true
  },
  "slot": {
    "ui:label": true
  },
  "name": {
    "ui:label": true
  },
  "entities": {
    "ui:options": {
      "label": true,
      "widget": "checkboxes",
      "inline": true
    }
  },
  "options": {
    "ui:label": true,
    "additionalProperties": {
      "ui:label": true
    }
  },
  "sizeMapping": {
    "ui:label": true,
    "additionalProperties": {
      "ui:label": true,
      "items": {
        "ui:options": {
          "removable": false,
          "label": true
        }
      }
    }
  },
  "prebid": {
    "ui:label": true,
    "bidders": {
      "ui:options": {
        "label": true,
        "widget": "checkboxes",
        "inline": true
      }
    },
    "excludeBidders": {
      "ui:options": {
        "label": true,
        "widget": "checkboxes",
        "inline": true
      }
    },
    "adTypes": {
      "ui:options": {
        "label": true,
        "widget": "checkboxes",
        "inline": true
      }
    },
    "sizeMapping": {
      "ui:label": true,
      "additionalProperties": {
        "ui:label": true,
        "items": {
          "ui:options": {
            "removable": false,
            "label": true
          }
        }
      }
    },
    "additionalProperties": {
      "ui:label": true,
      "additionalProperties": {
        "ui:label": true,
        "additionalProperties": {
          "ui:label": true,
          "additionalProperties": {
            "ui:label": true
          }
        }
      }
    }
  }
};

export default uiSchema;