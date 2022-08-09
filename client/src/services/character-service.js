import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_APP + "/";
const getCharacters = async (page) => {
  const { data } = await axios.get(API_URL + "characters", {
    params: { page: page },
    withCredentials: true,
  });
  return data;
};

export { getCharacters };
