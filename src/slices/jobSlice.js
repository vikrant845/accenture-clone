import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  currentlyViewingJob: {}
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.currentlyViewingJob = action.payload.job;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload.jobs;
    }
  }
});

export const { setJob, setJobs } = jobSlice.actions;
export default jobSlice.reducer;