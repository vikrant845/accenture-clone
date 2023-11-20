import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  width: window.innerWidth
}

export const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
    }
  }
});

export const { setWidth } = viewportSlice.actions;
export default viewportSlice.reducer;