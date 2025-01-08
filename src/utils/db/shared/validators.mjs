export function validateRequestBody(body, requiredFields) {
  for (const field of requiredFields) {
    if (!body[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
}
