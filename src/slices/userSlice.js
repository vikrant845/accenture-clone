import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  token: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.user = undefined;
      state.token = undefined;
    },
    addApplication: (state, action) => {
      state.user.applications.push(action.payload.application);
    }
  }
});

export const { setUser, clearUser, addApplication } = userSlice.actions;
export default userSlice.reducer;