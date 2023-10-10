import { STRAPI_API_TOKEN, API_URL } from "./urls";

export const fetchDataFromUrl = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();
  return data;
};