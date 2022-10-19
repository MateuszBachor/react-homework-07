import { createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
  name: "filters",
  initialState: {filter:null},
  reducers: {
    setFilter(state, {payload}) {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;