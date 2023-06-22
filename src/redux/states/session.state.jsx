import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorageKey,
  saveInLocalStorage,
  getInLocalStorage,
} from "../../utils";

const EmptyInitialState = () => {
  if (typeof window !== "undefined" && getInLocalStorage(UserKey)) {
    const userData = JSON.parse(localStorage?.getItem(UserKey));
    return {
      user: userData,
      isAuth: true,
      isAdmin: !!userData.roles.includes("admin"),
    };
  }

  return {
    user: null,
    isAuth: false,
    isAdmin: false,
  };
};

export const UserKey = "user";

export const sessionSlice = createSlice({
  name: "session",
  initialState: () => EmptyInitialState(),
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      saveInLocalStorage(UserKey, action.payload);
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    },
    logout: () => {
      clearLocalStorageKey(UserKey);
      return EmptyInitialState();
    },
  },
});

export const login = sessionSlice.actions.login;
export const logout = sessionSlice.actions.logout;

export default sessionSlice.reducer;
