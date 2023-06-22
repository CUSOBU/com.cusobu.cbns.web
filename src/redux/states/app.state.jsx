import { createSlice } from "@reduxjs/toolkit";

const EmptyInitialState = {
  sideBarOpen: true,
  anchorElUser: null,
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState: EmptyInitialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateTheme: (state) => {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    },
    toggleSideBar: (state) => {
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen,
      };
    },
    setAnchorElUser: (state, action) => {
      return {
        ...state,
        anchorElUser: action.payload,
      };
    },
  },
});

export const toggleSideBar = appSlice.actions.toggleSideBar;
export const setAnchorElUser = appSlice.actions.setAnchorElUser;

export default appSlice.reducer;
