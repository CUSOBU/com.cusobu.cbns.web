import { configureStore } from "@reduxjs/toolkit";
//Import Slices
import appReducer from "./states/app.state";
import usersReducer from "./states/users.state";
import sessionReducer from "./states/session.state";

export const store = configureStore({
  reducer: {
    app: appReducer,
    users: usersReducer,
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production", // eslint-disable-line
});
