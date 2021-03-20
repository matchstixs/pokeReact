import axios from "axios"; 
// fetch data from REST APIs
import { handleError, handleResponse } from "./ApiUtiService";

const httpRequest = (method, url, request, headers) => {
  // return a promise
  return axios({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      const result = handleResponse(res);
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject(handleError(err));
    });
};

// CRUD 
// Create
const post = (url, request, headers) => {
  return httpRequest("post", url, request, headers);
};

// Read
const get = (url, request, headers) => {
  let queryString = "";
  if (request && Object.keys(request).length > 0) {
    queryString += "?";
    let len = Object.keys(request).length,
      i = 0;

    // transform request object to query string
    for (let key in request) {
      i++;
      queryString += `${key}=${request[key].toString()}`;
      if (len > i) queryString += "&";
    }
  }
  return httpRequest("get", `${url}${queryString}`, request, headers);
};

// Update
const put = (url, request, headers) => {
  return httpRequest("put", url, request, headers);
};

const patch = (url, request, headers) => {
  return httpRequest("patch", url, request, headers);
};

// Delete
const deleteRequest = (url, request, headers) => {
  return httpRequest("delete", url, request, headers);
};


const Api = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch,
};

export default Api;