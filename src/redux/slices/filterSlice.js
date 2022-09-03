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
      state.filters[payload.key].push(payload.id);
    },
    removeFilter: (state, { payload }) => {
      state.filters[payload.key].splice(
        state.filters[payload.key].findIndex((item) => item.id === payload.id),
        1
      );
    },
  },
});

export const { updateQuery, addFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
