import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth-service";
const user = JSON.parse(localStorage.getItem("user"));
export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }) => {
    const response = await AuthService.signup(email, password);
    return response.data;
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const data = await AuthService.login(email, password);
    return { user: data };
  }
);

export const updateUser = createAsyncThunk("auth/update", async ({ data }) => {
  await AuthService.update(data);
  return { user: data };
});

export const currentUser = createAsyncThunk("auth/currentUser", async () => {
  const data = await AuthService.currentUser();
  return { user: data };
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.user = { ...state.user, ...action.payload.user };
    },
    [updateUser.rejected]: (state, action) => {},
    [currentUser.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.user ? true : false;
      state.user = action.payload.user;
    },
    [currentUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const { reducer } = authSlice;
export default reducer;
