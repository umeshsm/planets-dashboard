import React from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import {
  getPlanets,
  getShapes,
  getColors,
  getSizes,
} from "src/redux/slices/dataSlice";

import Search from "src/features/search";
import Filters from "src/features/filters";
import Planets from "src/features/planets";

import "src/App.css";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPlanets());
    dispatch(getShapes());
    dispatch(getColors());
    dispatch(getSizes());
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      width="100%"
      height="100vh"
      gap={3}
    >
      <Grid container item direction="column" alignItems="center">
        <Search />
        <Grid container item height="85vh">
          <Grid item xs={3}>
            <Filters />
          </Grid>
          <Grid item xs={9} padding="20px">
            <Planets />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
