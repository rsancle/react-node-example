import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_APP + "/";
const signup = (email, password) => {
  return axios.post(API_URL + "users/sign-up", {
    email,
    password,
  });
};

const signout = () => {
  return axios.get(API_URL + "users/sign-out", { withCredentials: true });
};

const login = async (email, password) => {
  const { data } = await axios.post(
    API_URL + "users/sign-in",
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return data;
};

const update = async (data) => {
  await axios.patch(API_URL + "users", data, { withCredentials: true });
};

const currentUser = async () => {
  const { data } = await axios.get(API_URL + "users/current", {
    withCredentials: true,
  });
  return data;
};

const authService = {
  signup,
  login,
  currentUser,
  signout,
  update,
};
export default authService;
