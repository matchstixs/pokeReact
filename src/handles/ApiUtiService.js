// err handler
export const handleResponse = (response) => {
    if (
      response.status === 200 ||
      response.status === 202 ||
      response.statusText === "OK" ||
      response.statusText === "Created"
    )
      return response.data;
    if (response.status === 400) {
      // Server side error returns string error message
      // Parsed as text instead of json
      const error = response.statusText();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

export const handleError = (error) => {
  console.error("API call failed. " + error);
  throw error;
}