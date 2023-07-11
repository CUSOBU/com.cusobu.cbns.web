import { configureStore } from "@reduxjs/toolkit";
//Import Slices
import appReducer from "./states/app.state";
import usersReducer from "./states/users.state";
import sessionReducer from "./states/session.state";
import customizationReducer from "./states/customizationState/customization.state";

export const store = configureStore({
  reducer: {
    app: appReducer,
    users: usersReducer,
    session: sessionReducer,
    customization: customizationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production", // eslint-disable-line
});
