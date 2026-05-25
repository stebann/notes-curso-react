import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

async function request(method, path, data) {
  try {
    const response = await httpClient.request({
      method,
      url: path,
      data,
    });
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message || error?.message || "HTTP request failed";
    throw new Error(message, { cause: error });
  }
}

export const http = {
  get: (path) => request("get", path),
  post: (path, body) => request("post", path, body),
  patch: (path, body) => request("patch", path, body),
  delete: (path) => request("delete", path),
};
