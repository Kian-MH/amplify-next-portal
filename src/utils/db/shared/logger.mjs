export function logInfo(message, details = {}) {
  console.log('INFO:', message, details);
}

export function logError(message, error = {}) {
  console.error('ERROR:', message, error);
}