import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "src/redux/slices/filterSlice";
import dataReducer from "src/redux/slices/dataSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    data: dataReducer,
  },
});
