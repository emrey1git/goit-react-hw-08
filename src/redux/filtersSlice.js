import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

// Selector fonksiyonu - state içinden filtreyi seçmek için
export const selectFilter = (state) => state.filters.filter;

export default filtersSlice.reducer;
