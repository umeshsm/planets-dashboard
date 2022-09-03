import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getURL } from "src/helpers";

const initialState = {
  loading: false,
  planets: [],
  colors: [],
  shapes: [],
  sizes: [],
};

export const getPlanets = createAsyncThunk(
  "data/getPlanets",
  async (filters) => {
    const url = getURL(filters);
    console.log(url);
    return fetch(url).then((res) => res.json());
  }
);

export const getShapes = createAsyncThunk("data/getShapes", async () => {
  return fetch("http://localhost:3000/shapes").then((res) => res.json());
});

export const getColors = createAsyncThunk("data/getColors", async () => {
  return fetch("http://localhost:3000/colors").then((res) => res.json());
});

export const getSizes = createAsyncThunk("data/getSizes", async () => {
  return fetch("http://localhost:3000/sizes").then((res) => res.json());
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: {
    [getPlanets.pending]: (state) => {
      state.loading = true;
    },
    [getPlanets.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.planets = payload;
    },
    [getPlanets.rejected]: (state) => {
      state.loading = false;
    },
    [getShapes.pending]: (state) => {
      state.loading = true;
    },
    [getShapes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.shapes = payload;
    },
    [getShapes.rejected]: (state) => {
      state.loading = false;
    },
    [getColors.pending]: (state) => {
      state.loading = true;
    },
    [getColors.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.colors = payload;
    },
    [getColors.rejected]: (state) => {
      state.loading = false;
    },
    [getSizes.pending]: (state) => {
      state.loading = true;
    },
    [getSizes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.sizes = payload;
    },
    [getSizes.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;
