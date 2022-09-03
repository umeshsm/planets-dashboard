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
      state.filters[payload.key].splice(
        state.filters[payload.key].findIndex((item) => item.id === payload.id),
        1
      );
    },
    updateFilters: (state, { payload }) => {
      state.query = payload.query;
      state.filters = { ...payload.filters };
    },
    clearFilters: (state, { payload }) => {
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
