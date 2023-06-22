import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoaded: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    createUser: (state, action) => ({
      users: [...state.users, action.payload],
      isLoaded: false,
    }),
    modifyUser: (state, action) => ({
      users: state?.users.map((user) =>
        user.id === action.payload.id
          ? { ...action.payload, id: user.id }
          : user
      ),
      isLoaded: false,
    }),
    deleteUser: (state, action) => ({
      users: state.users.filter((user) => user.id !== action.payload),
      isLoaded: false,
    }),
    deleteManyUser: (state, action) => ({
      users: state.users.filter((user) => !action.payload.includes(user.id)),
      isLoaded: false,
    }),
  },
});

export const { createUser, modifyUser, deleteUser, deleteManyUser } =
  userSlice.actions;

export default userSlice.reducer;
