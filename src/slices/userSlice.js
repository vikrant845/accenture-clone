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
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;