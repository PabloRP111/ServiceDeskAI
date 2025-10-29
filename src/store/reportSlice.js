import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "reports",
  initialState: {
    list: [],
  },
  reducers: {
    addReport: (state, action) => {
      state.list.push(action.payload);
    },
    removeReport: (state, action) => {
      state.list = state.list.filter(r => r.id !== action.payload);
    },
  },
});

export const { addReport, removeReport } = reportSlice.actions;
export default reportSlice.reducer;
