export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const NOTAS_API = {
  GET_ALL: "notas",
  CREATE: "notas",
  GET_BY_ID: (id) => `notas/${id}`,
  UPDATE: (id) => `notas/${id}`,
  DELETE: (id) => `notas/${id}`,
};
