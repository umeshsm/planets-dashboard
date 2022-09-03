import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  filters: {
    color: [],
    shape: [],
    size: [],
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateQuery: (state, { payload }) => {
      state.query = payload.query;
    },
    addFilter: (state, { payload }) => {
      state.filters[payload.key] = [
        ...new Set([...state.filters[payload.key], payload.id]),
      ];
    },
    removeFilter: (state, { payload }) => {
      state.filters[payload.key] = state.filters[payload.key].filter(
        (item) => item !== payload.id
      );
    },
    updateFilters: (state, { payload }) => {
      state.query = payload.query;
      state.filters = { ...payload.filters };
    },
    clearFilters: (state) => {
      state.query = initialState.query;
      state.filters = { ...initialState.filters };
    },
  },
});

export const {
  updateQuery,
  addFilter,
  removeFilter,
  updateFilters,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
