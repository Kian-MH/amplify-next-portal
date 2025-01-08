export function successResponse(data) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

export function errorResponse(message, statusCode = 400) {
  return {
    statusCode,
    body: JSON.stringify({ message }),
  };
}