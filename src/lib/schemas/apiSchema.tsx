const apiSchema = {
  "type": "object",
  "properties": {
    "placementGroups": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "matchRegex": {
              "type": "string"
            },
            "placements": {
              "type": "array",
              "items": [
                {
                  "type": "object",
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
                      "type": "object",
                      "patternProperties": {
                        "^.*$": {
                          "type": "array",
                          "items": [
                            {
                              "type": "array",
                              "items": [
                                {
                                  "type": "integer"
                                },
                                {
                                  "type": "integer"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    },
                    "options": {
                      "type": "object",
                      "patternProperties": {
                        "^.*$": {
                          "type": "string"
                        }
                      }
                    },
                    "prebid": {
                      "type": "object",
                      "properties": {
                        "bidders": {
                          "type": "array",
                          "items": [
                            {
                              "type": "string"
                            },
                          ]
                        },
                        "adTypes": {
                          "type": "array",
                          "items": [
                            {
                              "type": "string"
                            }
                          ]
                        },
                        "sizeMapping": {
                          "type": "object",
                          "patternProperties": {
                            "^.*$": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "integer"
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        }
                      },
                      "patternProperties": {
                        "^(?!bidders|excludeBidders|adTypes|sizeMapping).*$": {
                          "type": "object",
                          "patternProperties": {
                            "^.*$": {
                              "type": "object",
                              "properties": {
                                "video": {
                                  "type": "object",
                                  "patternProperties": {
                                    "^.*$": {
                                      "anyOf": [
                                        { "type": "string" },
                                        { "type": "integer" },
                                      ],
                                    },
                                  }
                                },
                                "banner": {
                                  "type": "object",
                                  "patternProperties": {
                                    "^.*$": {
                                      "anyOf": [
                                        { "type": "string" },
                                        { "type": "integer" },
                                      ],
                                    },
                                  }
                                },
                                "outstream": {
                                  "type": "object",
                                  "patternProperties": {
                                    "^.*$": {
                                      "anyOf": [
                                        { "type": "string" },
                                        { "type": "integer" },
                                      ],
                                    },
                                  }
                                },
                                "native": {
                                  "type": "object",
                                  "patternProperties": {
                                    "^.*$": {
                                      "anyOf": [
                                        { "type": "string" },
                                        { "type": "integer" },
                                      ],
                                    },
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
};

export default apiSchema;