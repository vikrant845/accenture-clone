import { configureStore } from "@reduxjs/toolkit";
import viewPortReducer from '../slices/viewportSlice';
import jobReducer from '../slices/jobSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    viewport: viewPortReducer,
    job: jobReducer,
    user: userReducer
  }
});